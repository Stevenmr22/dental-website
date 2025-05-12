import Image from "next/image"
import Link from "next/link"
import { Instagram, Clock, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#0a3b5c] text-white">
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Servicios de Estomatología</h1>
            <p className="text-xl md:text-2xl font-light">"Sonríe sin límites"</p>
            <p className="text-lg">Calidad y precio a tu alcance</p>
            <div className="pt-4">
              <Button size="lg" className="bg-[#e6c9a5] hover:bg-[#d4b48c] text-[#0a3b5c] font-semibold" asChild>
                <Link href="#citas">Agenda tu cita</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-12%20at%2009.47.20_1bc50c60.jpg-MDdYzw8dNKgBUR0Yzs9bGIJLEsEyMl.jpeg"
                alt="Servicios de Estomatología"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white" id="servicios">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a3b5c] mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Limpieza Dental"
              description="Profilaxis profesional para mantener tu sonrisa saludable"
              imageUrl="/images/profilaxis.png"
            />
            <ServiceCard
              title="Detartraje / Curetaje"
              description="Eliminación de sarro y tratamiento de encías"
              imageUrl="/images/detartraje.png"
            />
            <ServiceCard
              title="Exodoncia Simple"
              description="Extracciones dentales con mínima invasión"
              imageUrl="/images/exodoncia.png"
            />
            <ServiceCard
              title="Restauraciones"
              description="Empastes estéticos para devolver la función y estética"
              imageUrl="/images/restauraciones.jpg"
            />
            <ServiceCard
              title="Endodoncia"
              description="Tratamiento de canal para salvar piezas dentales"
              imageUrl="/images/endodoncia.png"
            />
            <ServiceCard
              title="Sellantes"
              description="Prevención de caries en surcos y fisuras"
              imageUrl="/images/sellantes.png"
            />
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-gray-50" id="instagram">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a3b5c] mb-4">Síguenos en Instagram</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantente al día con nuestros casos clínicos, consejos de salud bucal y contenido educativo
            </p>
            <div className="flex justify-center items-center gap-4 mt-6">
              <Link
                href="https://www.instagram.com/cristinamorelj21"
                target="_blank"
                className="flex items-center gap-2 text-[#0a3b5c] font-medium hover:text-[#0a3b5c]/80"
              >
                <Instagram className="h-5 w-5" />
                @cristinamorelj21
              </Link>
              <Link
                href="https://www.instagram.com/cmdental.journal/"
                target="_blank"
                className="flex items-center gap-2 text-[#0a3b5c] font-medium hover:text-[#0a3b5c]/80"
              >
                <Instagram className="h-5 w-5" />
                @cmdentaljournal
              </Link>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InstagramPost
              imageUrl="/images/igpost1.jpg"
              alt="Estructura de un diente: Conoce todas sus partes"
              link="https://www.instagram.com/cmdental.journal/"
            />
            <InstagramPost
              imageUrl="/images/igpost2.jpg"
              alt="Portafolio de Radiografías - Incisivos y Caninos"
              link="https://www.instagram.com/cmdental.journal/"
            />
            <InstagramPost
              imageUrl="/images/igpost3.jpg"
              alt="Portafolio de Radiografías - Molares"
              link="https://www.instagram.com/cmdental.journal/"
            />
            <InstagramPost
              imageUrl="/images/igpost4.jpg"
              alt="Clasificación de Black"
              link="https://www.instagram.com/cmdental.journal/"
            />
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-[#0a3b5c] text-white" id="citas">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Agenda tu Cita</h2>
            <p className="text-lg mb-8">
              Contáctanos directamente por WhatsApp para agendar tu cita o resolver cualquier duda sobre nuestros
              servicios
            </p>

            <div className="bg-white text-[#0a3b5c] p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#0a3b5c]" />
                    <span className="font-medium">829-266-5637</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#0a3b5c]" />
                    <span className="font-medium">Lunes - Jueves: 8:00am - 12:00pm</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#0a3b5c]" />
                    <span className="font-medium">Hospital Regional José María Cabral y Báez</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full md:w-auto"
                  asChild
                >
                  <Link href="https://wa.me/18292665637" target="_blank">
                    Contactar por WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#072a42] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Servicios de Estomatología. Todos los derechos reservados.</p>
          <p className="mt-2">
            <Link href="#" className="hover:underline">
              Política de Privacidad
            </Link>
            {" | "}
            <Link href="#" className="hover:underline">
              Términos de Servicio
            </Link>
          </p>
        </div>
      </footer>
    </main>
  )
}

function ServiceCard({
  title,
  description,
  imageUrl,
}: {
  title: string
  description: string
  imageUrl: string
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative bg-black">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          priority={title === "Limpieza Dental"}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function InstagramPost({
  imageUrl,
  alt,
  link,
}: {
  imageUrl: string
  alt: string
  link: string
}) {
  return (
    <Link href={link} target="_blank" className="aspect-square bg-white rounded-md overflow-hidden relative group">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
      </div>
    </Link>
  )
}
