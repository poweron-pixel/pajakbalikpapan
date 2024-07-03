export default function Stats() {
  return (
    <Container>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-brand-blue dark:text-gray-200 text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
              Dalam Angka
            </h2>

            <p className="max-w-screen-md text-brand-blue dark:text-gray-400 md:text-lg text-center mx-auto">
              Kami memulai membantu Wajib Pajak dalam rangka kepatuhan sejak Pandemi Covid dimulai.
              Kami fokus untuk perbaikan administrasi perpajakan.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            {/* <!-- question - start --> */}
            <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-brand-pink text-2xl md:text-3xl font-bold">
                  Omzet yang dikelola
                </h3>
              </div>

              <div className="flex justify-between items-center gap-4 pb-4 mb-4">
                <div>
                  <p className="text-brand-blue dark:text-gray-300 text-3xl md:text-5xl font-bold">
                    80M
                  </p>
                  <p className="text-gray-500 text-lg md:text-xl font-bold">tahun 2020</p>
                </div>

                <div>
                  <p className="text-brand-blue dark:text-gray-300 text-3xl md:text-5xl font-bold">
                    140M
                  </p>
                  <p className="text-gray-500 text-lg md:text-xl font-bold">tahun 2021</p>
                </div>
              </div>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div className="bg-brand-pink dark:bg-brand-orange rounded-2xl p-5">
              <div className="flex justify-between items-center border-bt gap-4 pb-4 mb-4">
                <h3 className="text-brand-blue text-2xl md:text-3xl font-bold">
                  Penghapusan Sanksi
                </h3>
              </div>

              <div className="flex justify-between items-center gap-4 pb-4 mb-4">
                <div>
                  <p className="text-brand-blue text-3xl md:text-5xl font-bold tracking-tighter">
                    100% disetujui
                  </p>
                  <p className="text-gray-100 text-sm md:text font-medium">S &amp; K berlaku</p>
                </div>
              </div>
            </div>
            {/* <!-- question - end --> */}

            {/* <!-- question - start --> */}
            <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-5">
              <div className="flex justify-between items-center border-bt gap-4 pb-4 mb-4">
                <h3 className="text-brand-pink text-2xl md:text-3xl font-bold">
                  Pengusaha Kena Pajak
                </h3>
              </div>

              <div className="flex justify-between items-center gap-4 pb-4 mb-4">
                <div>
                  <p className="text-brand-blue dark:text-gray-300 text-3xl md:text-5xl font-bold tracking-tighter">
                    100%
                  </p>
                  <p className="text-gray-400 text-sm md:text font-medium leading-tighter">
                    Persetujuan permohonan <br />
                    Perbaikan administrasi
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- question - end --> */}
          </div>
        </div>
      </div>
    </Container>
  )
}
