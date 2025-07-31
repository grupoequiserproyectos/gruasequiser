
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

// Función para enviar notificación por email (simulada - en producción usaría un servicio real)
async function sendEmailNotification(contactData: any) {
  // En un entorno de producción, aquí integrarías un servicio como:
  // - SendGrid, Mailgun, AWS SES, etc.
  // Por ahora, solo logueamos la información
  
  const emailContent = `
  NUEVO CONTACTO DESDE EL SITIO WEB - GRÚAS EQUISER
  
  INFORMACIÓN DEL CLIENTE:
  Nombre: ${contactData.name}
  Email: ${contactData.email}
  Teléfono: ${contactData.phone}
  Empresa: ${contactData.company || 'No especificada'}
  Ubicación: ${contactData.ubicacion || 'No especificada'}
  
  DETALLES DEL SERVICIO:
  Tonelaje requerido: ${contactData.tonelaje || 'No especificado'}
  Asunto: ${contactData.asunto}
  Mensaje: ${contactData.message}
  
  Formulario enviado: ${new Date().toLocaleString('es-VE')}
  ID de contacto: ${contactData.id}
  `
  
  console.log('=== EMAIL PARA ENVIAR A info@gruasequiser.net y equiserdominios@gmail.com ===')
  console.log(emailContent)
  console.log('=== FIN DEL EMAIL ===')
  
  // TODO: Implementar envío real de email en producción
  return true
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
      tonelaje,
      service // mantener compatibilidad con formulario anterior
    } = body

    // Validación para nuevo formulario (con asunto)
    if (asunto) {
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
