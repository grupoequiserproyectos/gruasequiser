
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'

// Configuración de correos destinatarios
const EMAIL_RECIPIENTS = [
  'equiserdominios@gmail.com',
  'info@gruasequiser.net',
  'direcciontecnica@equisercranes.com'
]

// Configurar transportador de email usando Gmail SMTP
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'noreply@gruasequiser.net',
      pass: process.env.EMAIL_PASS || 'default_pass'
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

// Función para enviar notificación por email a múltiples destinatarios
async function sendEmailNotification(contactData: any) {
  const tipoServicioLabels = {
    'alquiler_gruas': 'Alquiler de Grúas',
    'transporte_pesado': 'Transporte Pesado y Sobredimensionado',
    'servicio_bateas': 'Servicio con Bateas'
  }

  // Crear el contenido HTML del email
  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #1E3A8A; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .info-section { background-color: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .label { font-weight: bold; color: #1E3A8A; }
        .footer { background-color: #FFC107; padding: 15px; text-align: center; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🏗️ NUEVO CONTACTO - GRÚAS EQUISER</h1>
        <p>Nueva consulta desde el sitio web</p>
      </div>
      
      <div class="content">
        <div class="info-section">
          <h3 style="color: #1E3A8A;">👤 INFORMACIÓN DEL CLIENTE</h3>
          <p><span class="label">Nombre:</span> ${contactData.name}</p>
          <p><span class="label">Email:</span> ${contactData.email}</p>
          <p><span class="label">Teléfono:</span> ${contactData.phone}</p>
          <p><span class="label">Empresa:</span> ${contactData.company || 'No especificada'}</p>
          <p><span class="label">Ubicación:</span> ${contactData.ubicacion || 'No especificada'}</p>
        </div>
        
        <div class="info-section">
          <h3 style="color: #1E3A8A;">🚚 DETALLES DEL SERVICIO</h3>
          <p><span class="label">Tipo de servicio:</span> ${tipoServicioLabels[contactData.tipo_servicio as keyof typeof tipoServicioLabels] || contactData.tipo_servicio || 'No especificado'}</p>
          ${contactData.tipo_servicio === 'alquiler_gruas' && contactData.tonelaje ? `<p><span class="label">Tonelaje requerido:</span> ${contactData.tonelaje}</p>` : ''}
          <p><span class="label">Asunto:</span> ${contactData.asunto}</p>
          <p><span class="label">Mensaje:</span><br>${contactData.message}</p>
        </div>
        
        <div class="info-section">
          <p><span class="label">📅 Formulario enviado:</span> ${new Date().toLocaleString('es-VE')}</p>
          <p><span class="label">🆔 ID de contacto:</span> ${contactData.id}</p>
        </div>
      </div>
      
      <div class="footer">
        <p>GRÚAS EQUISER C.A. - Líder en Alquiler de Grúas en Venezuela</p>
        <p>WhatsApp: +58 414 343 2882 | Web: gruasequiser.net</p>
      </div>
    </body>
    </html>
  `

  try {
    const transporter = createEmailTransporter()
    
    // Configurar el email usando Promise.all para enviar a todos los destinatarios
    const emailPromises = EMAIL_RECIPIENTS.map(recipient => {
      return transporter.sendMail({
        from: '"GRÚAS EQUISER - Sitio Web" <noreply@gruasequiser.net>',
        to: recipient,
        subject: `🏗️ Nueva Consulta Web - ${contactData.name} - ${contactData.asunto}`,
        text: `
NUEVO CONTACTO DESDE EL SITIO WEB - GRÚAS EQUISER

INFORMACIÓN DEL CLIENTE:
Nombre: ${contactData.name}
Email: ${contactData.email}
Teléfono: ${contactData.phone}
Empresa: ${contactData.company || 'No especificada'}
Ubicación: ${contactData.ubicacion || 'No especificada'}

DETALLES DEL SERVICIO:
Tipo de servicio: ${tipoServicioLabels[contactData.tipo_servicio as keyof typeof tipoServicioLabels] || contactData.tipo_servicio || 'No especificado'}${contactData.tipo_servicio === 'alquiler_gruas' && contactData.tonelaje ? `
Tonelaje requerido: ${contactData.tonelaje}` : ''}
Asunto: ${contactData.asunto}
Mensaje: ${contactData.message}

Formulario enviado: ${new Date().toLocaleString('es-VE')}
ID de contacto: ${contactData.id}
        `,
        html: emailHTML
      })
    })

    // Enviar a todos los destinatarios
    const results = await Promise.allSettled(emailPromises)
    
    // Verificar si al menos uno se envió correctamente
    const successful = results.filter(result => result.status === 'fulfilled').length
    const failed = results.filter(result => result.status === 'rejected').length
    
    console.log(`✅ Emails enviados exitosamente: ${successful}/${EMAIL_RECIPIENTS.length}`)
    if (failed > 0) {
      console.log(`❌ Emails fallidos: ${failed}/${EMAIL_RECIPIENTS.length}`)
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.error(`Error enviando a ${EMAIL_RECIPIENTS[index]}:`, result.reason)
        }
      })
    }
    
    // Retornar true si al menos uno se envió correctamente
    return successful > 0
    
  } catch (error) {
    console.error('Error al configurar el transportador de email:', error)
    
    // Fallback: log the information if email fails
    console.log('=== FALLBACK: DATOS DEL CONTACTO (EMAIL FALLÓ) ===')
    console.log('Destinatarios:', EMAIL_RECIPIENTS.join(', '))
    console.log('Datos:', contactData)
    console.log('=== FIN DEL FALLBACK ===')
    
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      company, 
      ubicacion, 
      asunto, 
      message, 
      tipo_servicio,
      tonelaje,
      service // mantener compatibilidad con formulario anterior
    } = body

    // Validación para nuevo formulario con tipo de servicio
    if (tipo_servicio) {
      if (!name || !email || !phone || !asunto || !message || !tipo_servicio) {
        return NextResponse.json(
          { error: 'Los campos Nombre, Correo, Teléfono, Tipo de Servicio, Asunto y Mensaje son obligatorios' },
          { status: 400 }
        )
      }
      
      // Validar que si es alquiler de grúas, debe tener tonelaje
      if (tipo_servicio === 'alquiler_gruas' && !tonelaje) {
        return NextResponse.json(
          { error: 'Para el servicio de Alquiler de Grúas debe seleccionar una opción de tonelaje' },
          { status: 400 }
        )
      }
    }
    // Validación para formulario anterior (con asunto pero sin tipo_servicio)  
    else if (asunto) {
      if (!name || !email || !phone || !asunto || !message) {
        return NextResponse.json(
          { error: 'Los campos Nombre, Correo, Teléfono, Asunto y Mensaje son obligatorios' },
          { status: 400 }
        )
      }
    } 
    // Validación para formulario anterior (con service)
    else if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor ingresa un email válido' },
        { status: 400 }
      )
    }

    // Guardar en la base de datos
    const contactForm = await prisma.contactForm.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        company: company?.trim() || null,
        ubicacion: ubicacion?.trim() || null,
        asunto: asunto?.trim() || 'Consulta general',
        message: message.trim(),
        tipo_servicio: tipo_servicio?.trim() || null,
        tonelaje: tonelaje?.trim() || null,
        service: service?.trim() || null, // mantener compatibilidad
        status: 'pending'
      }
    })

    // Enviar notificación por email
    try {
      await sendEmailNotification({
        ...contactForm,
        id: contactForm.id
      })
    } catch (emailError) {
      console.error('Error al enviar email de notificación:', emailError)
      // No fallar el request si falla el email, solo loguear
    }

    return NextResponse.json(
      { 
        success: true, 
        message: '¡Gracias por contactarnos! Pronto un asesor de venta se está comunicando con usted. Muchas gracias por preferirnos.',
        id: contactForm.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error al procesar formulario de contacto:', error)
    
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor intenta nuevamente o contáctanos directamente por WhatsApp.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
