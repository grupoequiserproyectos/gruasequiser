
import { Header } from '@/components/header'
import { BlogHomePage } from '@/components/blog/blog-home-page'
import { Footer } from '@/components/footer'

export const metadata = {
  title: '📝 Blog de Grúas | GRÚAS EQUISER C.A.',
  description: 'Mantente actualizado con las últimas noticias, tecnologías y proyectos del sector de alquiler de grúas y transporte pesado en Venezuela.',
  keywords: 'blog grúas, noticias grúas, tecnología grúas, proyectos grúas, alquiler grúas Venezuela',
}

export const dynamic = "force-dynamic"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHomePage />
      <Footer />
    </main>
  )
}
