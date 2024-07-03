import Head from 'next/head'
import Navbar from '@components/navbar'
import SectionTitle from '@components/sectionTitle'
import Footer from '@components/footer'
import Image from 'next/image'
import Container from '@components/container'
import Link from 'next/link'
import LocalBusinessSeo from '@components/LocalBusinessJsonLd'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pajak Balikpapan</title>
        <meta
          name="description"
          content="Layanan Perpajakan, Akuntansi, Pendampingan Pajak, Konsultasi Perpajakan
          Layanan untuk UMKM &amp; Perusahaan Startup Masuk Layanan Pendampingan Sengketa Pajak Masuk Layanan untuk UMKM &amp; Perusahaan Startup Masuk Layanan Pendampingan Sengketa Pajak Masuk konsultan pajak balikpapan pajak, tax consultant transfer pricing lapor SPT kantor konsultan pajak pemeriksaan pajak pengacara pajak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />
      <Pekerjaan />
      <Stats />
      <SectionTitle pretitle="Hubungi Kami" title="0815—21777—255" id="hubungi-kami">
        via Whatsapp, telepon atau telegram
      </SectionTitle>

      <Footer />
      <LocalBusinessSeo />
    </>
  )
}

function Hero() {
  return (
    <Container>
      <section className="bg-white dark:bg-transparent">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray-200 text-brand">
              Spesialiasi Masalah Perpajakan
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Berbekal pengalaman dalam bidang perpajakan. Kami siap memberikan solusi atas berbagai
              permasalahan perpajakan perusahaan anda.
            </p>
            <Link
              href="#hubungi-kami"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 dark:text-gray-200 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-500 dark:focus:ring-gray-800"
            >
              Hubungi Kami
            </Link>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/spt-tahunan-pph.webp"
              alt="SPT Tahunan PPh Badan Balikpapan"
              layout=""
              width={800}
              height={1000}
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        .bg-image-hero {
          background-image: url('/helena.jpg');
        }
      `}</style>
    </Container>
  )
}

const features = [
  {
    name: 'SPT Tahunan PPh Badan',
    description:
      'Melakukan analisa proses bisnis, kepatuhan perpajakan dan equalisasi terhadap input di SPT sehingga menyajikan SPT yang valid.',
  },
  {
    name: 'Permohonan PKP',
    description:
      'Menganalisa kebutuhan permohonan pengukuhan PKP, menyiapkan dokumen yang akan diajukan, melakukan pengecekan di sistem DJP, mendampingi saat permohonan, permohonan Nomor Seri Faktur Pajak dan instalasi aplikasi eFaktur.',
  },
  {
    name: 'Permohonan Penghapusan Sanksi Pajak',
    description:
      'Mengidentifikasi permohonan yang tepat, mengukur tingkat keberhasilan permohonan, pengajuan permohonan.',
  },
  {
    name: 'Penanganan SP2DK',
    description:
      'Mengidentifikasi SP2DK, mapping langkah-langkah yang akan dilakukan, pendampingan tanggapan.',
  },
  {
    name: 'Pendampingan WP UMKM',
    description:
      '1x pertemuan dengan perusahaan untuk detil masalah, 1x pendampingan di KPP, menyusun respon ke KPP, mulai dari Rp2.000.000',
  },
  {
    name: 'Penyelesaian Masalah Tidak Lapor SPT Masa dan Tahunan tanpa transaksi',
    description:
      '1x pertemuan dengan perusahaan untuk detil masalah, pelaporan SPT Masa PPh, PPN, SPT Tahunan PPh Badan, Permohonan Penghapusan Sanksi, Biaya per Tahun Pajak flat Rp3.000.000',
  },
  {
    name: 'eFaktur & SPT Bulanan PPN, Tidak ada penerbitan Faktur Pajak',
    description: 'Biaya per 3(tiga) bulan flat Rp450.000',
  },
]

function Pekerjaan() {
  return (
    <Container className="bg-white py-12 dark:bg-transparent">
      <div className="lg:text-left">
        <p className="mt-2 text-4xl font-bold leading-8 tracking-tighter text-brand dark:text-gray-200 sm:text-5xl">
          Pengalaman perpajakan kami
        </p>
      </div>

      <div className="mt-24">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <p className="text-2xl font-semibold leading-6 tracking-tight text-brand dark:text-gray-200">
                {feature.name}
              </p>

              <div className="mt-2 text-base font-normal text-gray-600  dark:text-gray-400">
                {feature.description}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  )
}

const Numbers = [
  {
    name: 'SPT Tahunan PPh Badan',
    desc: [
      { title: '80M', desc: 'Tahun pajak 2020' },
      { title: '140M', desc: 'Tahun pajak 2021' },
    ],
  },
  {
    name: 'Penghapusan Sanksi',
    desc: [{ title: '100% 👍', desc: 'S&K berlaku' }],
  },
  {
    name: 'Pengusaha Kena Pajak',
    desc: [{ title: '100%', desc: 'Persetujuan permohonan' }],
  },
]

function Stats() {
  return (
    <Container>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-brand dark:text-gray-200 text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
            Dalam Angka
          </h2>

          <p className="max-w-screen-md text-brand dark:text-gray-400 md:text-lg text-center mx-auto">
            Kami memulai membantu Wajib Pajak dalam rangka kepatuhan sejak Pandemi Covid dimulai.
            Kami fokus untuk perbaikan administrasi perpajakan.
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
          {/* <!-- question - start --> */}
          {Numbers.map((number, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-5">
              <div className="flex justify-between items-center border-b border-gray-300 gap-4 dark:border-gray-700 pb-4 mb-4">
                <h3 className="text-rose text-2xl md:text-3xl font-bold">{number.name}</h3>
              </div>

              <div className="flex justify-between items-center gap-4 pb-4 pt-5">
                {number.desc.map((breadcrumb, index) => (
                  <div key={index}>
                    <p className="text-brand dark:text-gray-300 text-3xl md:text-5xl font-bold">
                      {breadcrumb.title}
                    </p>
                    <p className="text-gray-500 text-lg md:text-xl font-bold">{breadcrumb.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* <!-- question - end --> */}
        </div>
      </div>
    </Container>
  )
}
