
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

// 📧 CONFIGURACIÓN DE CORREOS DESTINATARIOS - ACTUALIZADO CON 5 CORREOS
const EMAIL_RECIPIENTS = [
  'equiserdominios@gmail.com',
  'equisercadominios@gmail.com',
  'marketingimpulsoai@gmail.com',
  'info@gruasequiser.com',
  'direccionmercadeo@gruasequiser.com'
]

// Sistema de logging mejorado
const logSubmission = (data: any, status: 'success' | 'error', details?: any) => {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    status,
    data: {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      tipo_servicio: data.tipo_servicio
    },
    recipients: EMAIL_RECIPIENTS,
    details
  }

  try {
    const logPath = path.join(process.cwd(), 'logs', 'contact-forms.json')
    const logDir = path.dirname(logPath)
    
    // Crear directorio de logs si no existe
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true })
    }

    // Agregar entrada al log
    const logLine = JSON.stringify(logEntry) + '\n'
    fs.appendFileSync(logPath, logLine)
    
    console.log(`📝 Log guardado: ${status.toUpperCase()} - ${data.name}`)
  } catch (error) {
    console.error('❌ Error al guardar log:', error)
  }
}

// Configurar transportador de email usando Gmail SMTP
const createEmailTransporter = () => {
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS

  // Validar que existan las credenciales
  if (!emailUser || !emailPass) {
    console.warn('⚠️ ADVERTENCIA: Variables EMAIL_USER y EMAIL_PASS no configuradas')
    console.warn('⚠️ Los emails NO se enviarán. Configure las credenciales en .env')
  }

  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: emailUser || 'noreply@gruasequiser.com',
      pass: emailPass || ''
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

// Función para enviar notificación por email a múltiples destinatarios
// Retorna { success: boolean, notifiedEmails: string[] }
async function sendEmailNotification(contactData: any): Promise<{ success: boolean, notifiedEmails: string[] }> {
  const tipoServicioLabels = {
    'alquiler_gruas': 'Alquiler de Grúas',
    'transporte_pesado': 'Transporte Pesado y Sobredimensionado',
    'servicio_bateas': 'Servicio con Bateas'
  }

  // Crear el contenido HTML del email con diseño profesional
  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6; 
          color: #333; 
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }
        .email-container {
          max-width: 650px;
          margin: 20px auto;
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
          color: white; 
          padding: 30px 20px; 
          text-align: center;
        }
        .header h1 {
          margin: 0 0 10px 0;
          font-size: 28px;
          font-weight: bold;
        }
        .header p {
          margin: 0;
          font-size: 16px;
          opacity: 0.95;
        }
        .content { 
          padding: 30px 20px; 
          background-color: #ffffff;
        }
        .info-section { 
          background-color: #f8f9fa;
          padding: 20px; 
          margin: 15px 0; 
          border-radius: 8px;
          border-left: 4px solid #1E3A8A;
        }
        .info-section h3 {
          color: #1E3A8A;
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .info-row {
          margin: 12px 0;
          padding: 8px 0;
          border-bottom: 1px solid #e9ecef;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .label { 
          font-weight: bold; 
          color: #1E3A8A;
          display: inline-block;
          min-width: 140px;
        }
        .value {
          color: #333;
        }
        .footer { 
          background: linear-gradient(135deg, #FFC107 0%, #FFD700 100%);
          padding: 25px 20px; 
          text-align: center;
        }
        .footer p {
          margin: 8px 0;
          color: #1E3A8A;
          font-weight: bold;
        }
        .footer a {
          color: #1E3A8A;
          text-decoration: none;
          font-weight: bold;
        }
        .badge {
          display: inline-block;
          padding: 6px 12px;
          background-color: #1E3A8A;
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          margin-top: 10px;
        }
        @media only screen and (max-width: 600px) {
          .email-container {
            margin: 0;
            border-radius: 0;
          }
          .header h1 {
            font-size: 24px;
          }
          .content {
            padding: 20px 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>🏗️ NUEVA CONSULTA - GRÚAS EQUISER</h1>
          <p>Formulario de contacto desde el sitio web</p>
          <span class="badge">PRIORIDAD ALTA</span>
        </div>
        
        <div class="content">
          <div class="info-section">
            <h3>👤 INFORMACIÓN DEL CLIENTE</h3>
            <div class="info-row">
              <span class="label">Nombre:</span>
              <span class="value">${contactData.name}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${contactData.email}">${contactData.email}</a></span>
            </div>
            <div class="info-row">
              <span class="label">Teléfono:</span>
              <span class="value"><a href="tel:${contactData.phone}">${contactData.phone}</a></span>
            </div>
            ${contactData.company ? `
            <div class="info-row">
              <span class="label">Empresa:</span>
              <span class="value">${contactData.company}</span>
            </div>
            ` : ''}
            ${contactData.ubicacion ? `
            <div class="info-row">
              <span class="label">Ubicación:</span>
              <span class="value">${contactData.ubicacion}</span>
            </div>
            ` : ''}
          </div>
          
          <div class="info-section">
            <h3>🚚 DETALLES DEL SERVICIO</h3>
            <div class="info-row">
              <span class="label">Tipo de servicio:</span>
              <span class="value"><strong>${tipoServicioLabels[contactData.tipo_servicio as keyof typeof tipoServicioLabels] || contactData.tipo_servicio || 'No especificado'}</strong></span>
            </div>
            ${contactData.tipo_servicio === 'alquiler_gruas' && contactData.tonelaje ? `
            <div class="info-row">
              <span class="label">Tonelaje requerido:</span>
              <span class="value"><strong>${contactData.tonelaje}</strong></span>
            </div>
            ` : ''}
            <div class="info-row">
              <span class="label">Asunto:</span>
              <span class="value"><strong>${contactData.asunto}</strong></span>
            </div>
            <div class="info-row">
              <span class="label">Mensaje:</span>
              <div class="value" style="margin-top: 8px; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e9ecef;">
                ${contactData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div class="info-section">
            <h3>📅 INFORMACIÓN DEL SISTEMA</h3>
            <div class="info-row">
              <span class="label">Fecha y hora:</span>
              <span class="value">${new Date().toLocaleString('es-VE', { 
                timeZone: 'America/Caracas',
                dateStyle: 'full',
                timeStyle: 'long'
              })}</span>
            </div>
            <div class="info-row">
              <span class="label">ID de contacto:</span>
              <span class="value"><code>${contactData.id}</code></span>
            </div>
          </div>

          <div style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(255, 193, 7, 0.05) 100%); border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1E3A8A; font-weight: bold; font-size: 14px;">
              ⚡ Responder dentro de las próximas 2 horas para mantener la calidad del servicio
            </p>
          </div>
        </div>
        
        <div class="footer">
          <p style="font-size: 18px; margin-bottom: 5px;">GRÚAS EQUISER C.A.</p>
          <p style="font-size: 14px;">Líder en Alquiler de Grúas en Venezuela</p>
          <p style="font-size: 13px; margin-top: 12px;">
            📱 Teléfonos: +58 422-6347624 | +58 414-3432882<br>
            📱 WhatsApp: <a href="https://wa.me/message/IOBBJVBBVWNOI1">+58 422 6347624</a><br>
            🌐 Web: <a href="https://gruasequiser.com">gruasequiser.com</a><br>
            📧 Email: <a href="mailto:info@gruasequiser.com">info@gruasequiser.com</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `

  // Verificar que las credenciales SMTP estén configuradas
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ CRÍTICO: Variables EMAIL_USER y EMAIL_PASS no configuradas')
    console.log('=== DATOS DEL CONTACTO (MODO DESARROLLO - EMAIL NO ENVIADO) ===')
    console.log('📧 Destinatarios:', EMAIL_RECIPIENTS.join(', '))
    console.log('👤 Cliente:', contactData.name)
    console.log('📞 Teléfono:', contactData.phone)
    console.log('✉️ Email:', contactData.email)
    console.log('🚚 Servicio:', contactData.tipo_servicio)
    console.log('📝 Asunto:', contactData.asunto)
    console.log('=== FIN DEL LOG ===')
    
    logSubmission(contactData, 'error', 'Credenciales SMTP no configuradas')
    return { success: false, notifiedEmails: [] }
  }

  try {
    const transporter = createEmailTransporter()
    
    console.log(`📧 Iniciando envío a ${EMAIL_RECIPIENTS.length} destinatarios...`)
    
    // Configurar el email usando Promise.all para enviar a todos los destinatarios
    const emailPromises = EMAIL_RECIPIENTS.map((recipient, index) => {
      return transporter.sendMail({
        from: '"GRÚAS EQUISER - Sitio Web" <noreply@gruasequiser.com>',
        to: recipient,
        subject: `🏗️ Nueva Consulta Web - ${contactData.name} - ${contactData.asunto}`,
        text: `
NUEVO CONTACTO DESDE EL SITIO WEB - GRÚAS EQUISER

INFORMACIÓN DEL CLIENTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nombre: ${contactData.name}
Email: ${contactData.email}
Teléfono: ${contactData.phone}
Empresa: ${contactData.company || 'No especificada'}
Ubicación: ${contactData.ubicacion || 'No especificada'}

DETALLES DEL SERVICIO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tipo de servicio: ${tipoServicioLabels[contactData.tipo_servicio as keyof typeof tipoServicioLabels] || contactData.tipo_servicio || 'No especificado'}${contactData.tipo_servicio === 'alquiler_gruas' && contactData.tonelaje ? `
Tonelaje requerido: ${contactData.tonelaje}` : ''}
Asunto: ${contactData.asunto}
Mensaje: 
${contactData.message}

INFORMACIÓN DEL SISTEMA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Formulario enviado: ${new Date().toLocaleString('es-VE', { timeZone: 'America/Caracas' })}
ID de contacto: ${contactData.id}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GRÚAS EQUISER C.A. - Líder en Alquiler de Grúas en Venezuela
Teléfonos: +58 422-6347624 | +58 414-3432882
WhatsApp: +58 422-6347624 | Web: gruasequiser.com
        `,
        html: emailHTML
      }).then(() => {
        console.log(`✅ Email enviado exitosamente a: ${recipient}`)
        return { recipient, status: 'success' }
      }).catch((error: any) => {
        console.error(`❌ Error enviando a ${recipient}:`, error.message)
        return { recipient, status: 'error', error: error.message }
      })
    })

    // Enviar a todos los destinatarios
    const results = await Promise.all(emailPromises)
    
    // Contar exitosos y fallidos
    const successful = results.filter(r => r.status === 'success').length
    const failed = results.filter((r: any) => r.status === 'error').length
    
    // Obtener lista de correos notificados exitosamente
    const notifiedEmails = results
      .filter(r => r.status === 'success')
      .map(r => r.recipient)
    
    console.log(`\n📊 RESUMEN DE ENVÍO:`)
    console.log(`   ✅ Exitosos: ${successful}/${EMAIL_RECIPIENTS.length}`)
    console.log(`   ❌ Fallidos: ${failed}/${EMAIL_RECIPIENTS.length}`)
    console.log(`   📬 Correos notificados: ${notifiedEmails.join(', ')}`)
    
    // Log detallado
    logSubmission(contactData, successful > 0 ? 'success' : 'error', {
      successful,
      failed,
      notifiedEmails,
      results
    })
    
    // Retornar resultado con lista de correos notificados
    return { 
      success: successful > 0, 
      notifiedEmails 
    }
    
  } catch (error: any) {
    console.error('❌ Error crítico al configurar el transportador de email:', error)
    
    // Fallback: log the information if email fails
    console.log('\n=== FALLBACK: DATOS DEL CONTACTO (EMAIL FALLÓ) ===')
    console.log('📧 Destinatarios:', EMAIL_RECIPIENTS.join(', '))
    console.log('👤 Cliente:', contactData.name)
    console.log('📞 Teléfono:', contactData.phone)
    console.log('✉️ Email:', contactData.email)
    console.log('🚚 Servicio:', contactData.tipo_servicio)
    console.log('📝 Mensaje:', contactData.message)
    console.log('=== FIN DEL FALLBACK ===\n')
    
    logSubmission(contactData, 'error', error.message)
    
    return { success: false, notifiedEmails: [] }
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

    // Enviar notificación por email primero para obtener la lista de correos notificados
    let emailSent = false
    let correosNotificados: string[] = []
    
    try {
      const emailResult = await sendEmailNotification({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        company: company?.trim() || null,
        ubicacion: ubicacion?.trim() || null,
        asunto: asunto?.trim() || 'Consulta general',
        message: message.trim(),
        tipo_servicio: tipo_servicio?.trim() || null,
        tonelaje: tonelaje?.trim() || null
      })
      
      emailSent = emailResult.success
      correosNotificados = emailResult.notifiedEmails
      
      if (emailSent) {
        console.log(`✅ Notificaciones por email enviadas exitosamente a ${correosNotificados.length} destinatarios`)
      } else {
        console.warn('⚠️ No se pudieron enviar todas las notificaciones por email')
      }
    } catch (emailError) {
      console.error('❌ Error al enviar email de notificación:', emailError)
      // No fallar el request si falla el email, solo loguear
    }

    // Guardar en la base de datos con los correos notificados
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
        canal: 'web',
        status: 'pending',
        correos_notificados: correosNotificados
      }
    })

    // También guardar en la tabla Contactos_recibidos (tabla espejo con nombres descriptivos)
    await prisma.contactos_recibidos.create({
      data: {
        id: contactForm.id, // Usar el mismo ID para mantener sincronización
        nombre: contactForm.name,
        correo_contacto: contactForm.email,
        telefono: contactForm.phone,
        empresa: contactForm.company,
        ubicacion: contactForm.ubicacion,
        asunto: contactForm.asunto,
        mensaje: contactForm.message,
        tipo_servicio: contactForm.tipo_servicio,
        tonelaje: contactForm.tonelaje,
        canal: 'web',
        estado: 'pending',
        correos_notificados: correosNotificados
      }
    })

    console.log(`\n📝 Nuevo formulario recibido: ID ${contactForm.id}`)
    console.log(`👤 Cliente: ${contactForm.name}`)
    console.log(`📧 Email: ${contactForm.email}`)
    console.log(`🚚 Servicio: ${contactForm.tipo_servicio || contactForm.service}`)
    console.log(`📬 Notificados: ${correosNotificados.join(', ')}`)

    return NextResponse.json(
      { 
        success: true, 
        message: '¡Gracias por contactarnos! Pronto un asesor de venta se está comunicando con usted. Muchas gracias por preferirnos.',
        id: contactForm.id,
        emailSent
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('❌ Error crítico al procesar formulario de contacto:', error)
    
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
