import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'

// Correo destinatario para leads de WhatsApp
const EMAIL_RECIPIENT = 'cranesequiser@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, telefono, mensaje, servicio, fecha } = body

    if (!nombre) {
      return NextResponse.json(
        { error: 'Nombre requerido' },
        { status: 400 }
      )
    }

    // Configurar transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || process.env.SMTP_USER,
        pass: process.env.EMAIL_PASS || process.env.SMTP_PASS,
      },
    })

    // Fecha formateada
    const fechaFormateada = new Date(fecha).toLocaleString('es-VE', {
      timeZone: 'America/Caracas',
      dateStyle: 'full',
      timeStyle: 'short'
    })

    // HTML del correo
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #1E3A8A 0%, #1e40af 100%); color: white; padding: 25px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; }
          .header p { margin: 5px 0 0; opacity: 0.9; font-size: 14px; }
          .badge { display: inline-block; background: #FFC107; color: #1E3A8A; padding: 8px 16px; border-radius: 20px; font-weight: bold; margin-top: 15px; }
          .content { padding: 30px; }
          .info-box { background: #f8fafc; border-left: 4px solid #FFC107; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; }
          .info-box h3 { margin: 0 0 10px; color: #1E3A8A; font-size: 14px; text-transform: uppercase; }
          .info-box p { margin: 0; color: #374151; font-size: 16px; }
          .highlight { background: #FFC107; color: #1E3A8A; padding: 2px 8px; border-radius: 4px; font-weight: bold; }
          .footer { background: #1E3A8A; color: white; padding: 20px; text-align: center; font-size: 12px; }
          .footer a { color: #FFC107; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📱 Nuevo Lead de WhatsApp</h1>
            <p>Un cliente potencial quiere contactarte</p>
            <div class="badge">💬 VÍA WIDGET WHATSAPP</div>
          </div>
          <div class="content">
            <div class="info-box">
              <h3>👤 Nombre</h3>
              <p><strong>${nombre}</strong></p>
            </div>
            ${telefono ? `
            <div class="info-box">
              <h3>📞 Teléfono</h3>
              <p><a href="tel:${telefono}" style="color: #1E3A8A; text-decoration: none;">${telefono}</a></p>
            </div>
            ` : ''}
            <div class="info-box">
              <h3>🔧 Servicio Solicitado</h3>
              <p><span class="highlight">${servicio || 'No especificado'}</span></p>
            </div>
            <div class="info-box">
              <h3>💬 Mensaje</h3>
              <p>${mensaje || 'Sin mensaje adicional'}</p>
            </div>
            <div class="info-box">
              <h3>📅 Fecha y Hora</h3>
              <p>${fechaFormateada}</p>
            </div>
            <div style="background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 15px; margin-top: 20px; text-align: center;">
              <p style="margin: 0; color: #065f46; font-weight: bold;">⚡ Este cliente será redirigido a WhatsApp automáticamente</p>
              <p style="margin: 5px 0 0; color: #047857; font-size: 13px;">Responde rápido para cerrar la venta</p>
            </div>
          </div>
          <div class="footer">
            <p><strong>Grúas EQUISER, C.A.</strong></p>
            <p>+58 422-6347624 | +58 414-3432882</p>
            <p><a href="https://gruasequiser.com">gruasequiser.com</a> | <a href="mailto:info@gruasequiser.com">info@gruasequiser.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `

    // Enviar correo
    try {
      await transporter.sendMail({
        from: `"Grúas EQUISER - WhatsApp" <${process.env.EMAIL_USER || process.env.SMTP_USER}>`,
        to: EMAIL_RECIPIENT,
        subject: `📱 Nuevo Lead WhatsApp: ${nombre} - ${servicio || 'Consulta General'}`,
        html: htmlContent,
        text: `Nuevo Lead de WhatsApp\n\nNombre: ${nombre}\nTeléfono: ${telefono || 'No proporcionado'}\nServicio: ${servicio || 'No especificado'}\nMensaje: ${mensaje || 'Sin mensaje'}\nFecha: ${fechaFormateada}`
      })
      console.log(`✅ Lead de WhatsApp enviado a ${EMAIL_RECIPIENT}: ${nombre}`)
    } catch (emailError) {
      console.error('Error enviando correo:', emailError)
      // No fallar si el correo no se envía, el lead ya fue a WhatsApp
    }

    return NextResponse.json({
      success: true,
      message: 'Lead registrado correctamente'
    })

  } catch (error) {
    console.error('Error en /api/whatsapp-lead:', error)
    return NextResponse.json(
      { error: 'Error procesando solicitud' },
      { status: 500 }
    )
  }
}
