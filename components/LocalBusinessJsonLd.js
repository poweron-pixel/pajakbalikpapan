import { LocalBusinessJsonLd } from 'next-seo'

export default function LocalBusinessSeo() {
  return (
    <LocalBusinessJsonLd
      type="Store"
      id="https://pajakbalikpapan.online"
      name="Pajak Balikpapan"
      description="Layanan Perpajakan, Akuntansi, Pendampingan Pajak, Konsultasi Perpajakan
      Layanan untuk UMKM Perusahaan Startup Masuk Layanan Pendampingan Sengketa Pajak Masuk Layanan untuk UMKM Perusahaan Startup Masuk Layanan Pendampingan Sengketa Pajak Masuk konsultan pajak balikpapan pajak, tax consultant transfer pricing lapor SPT kantor konsultan pajak pemeriksaan pajak pengacara pajak"
      url="https://pajakbalikpapan.online"
      telephone="+6281521777255"
      address={{
        streetAddress: 'Jl Wonorejo',
        addressLocality: 'Balikpapan',
        postalCode: '76125',
        addressCountry: 'ID',
      }}
      sameAs={['pajakbalikpapan.vercel.app', 'www.pajakbalikpapan.online']}
      openingHours={[
        {
          opens: '08:00',
          closes: '23:59',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          validFrom: '2019-12-23',
          validThrough: '2030-04-02',
        },
        {
          opens: '14:00',
          closes: '20:00',
          dayOfWeek: 'Sunday',
          validFrom: '2019-12-23',
          validThrough: '2030-04-02',
        },
      ]}
      rating={{
        ratingValue: '4.5',
        ratingCount: '2',
      }}
      makesOffer={[
        {
          priceSpecification: {
            type: 'UnitPriceSpecification',
            priceCurrency: 'IDR',
            price: '2000000-10000000',
          },
          itemOffered: {
            name: 'SPT Tahunan PPh Badan',
            description: 'SPT Tahunan PPh Badan perusahaan PT/CV',
          },
        },
        {
          priceSpecification: {
            type: 'UnitPriceSpecification',
            priceCurrency: 'IDR',
            price: '2000000-10000000',
          },
          itemOffered: {
            name: 'Permohonan PKP',
            description:
              'Menganalisa kebutuhan permohonan pengukuhan PKP, menyiapkan dokumen yang akan diajukan, melakukan pengecekan di sistem DJP, mendampingi saat permohonan, permohonan Nomor Seri Faktur Pajak dan instalasi aplikasi eFaktur.',
          },
        },
      ]}
      action={{
        actionName: 'potentialAction',
        actionType: 'ReviewAction',
        target: 'https://wa.me/6281521777255',
      }}
    />
  )
}
