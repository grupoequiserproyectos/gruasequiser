
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validación básica
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
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
        service: service.trim(),
        message: message.trim(),
        status: 'pending'
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Formulario enviado exitosamente',
        id: contactForm.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error al procesar formulario de contacto:', error)
    
    return NextResponse.json(
      { error: 'Error interno del servidor' },
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
