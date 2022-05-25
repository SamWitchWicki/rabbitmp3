import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Download Lagu MP3 Gratis</title>
        <meta name="Download Lagu MP3 Gratis" content="Rabbitmp3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Download Lagu MP3 Gratis di{" "}
          <a href="https://rabbitmp3.cc">Rabbitmp3.cc</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://rabbitmp3.cc/category/hindi" className={styles.card}>
            <h2>Cara Download Lagu MP3 Terbaru 2022, Tanpa Iklan ! &rarr;</h2>
            <p>
              Rabbitmp3 adalah tempat download lagu terbaru dengan kualitas
              terbaik yang mudah dan cepat. Kamu bisa download lagu indo, lagu
              barat, lagu dj terbaru
            </p>
          </a>

          <a href="https://rabbitmp3.cc/category/bigo" className={styles.card}>
            <h2>Download Lagu MP3 &rarr;</h2>
            <p>
              Gudang lagu mp3 terbaru, download lagu mp3 terbaik gratis,
              dengarkan lagu mp3 secara online, top download lagu Indonesia.
              download lagu mp3 gratis, download lagu mp3 terbaru 2022, Stafa
              Band Tangga Lagu - Download lagu terbaru 2022 Indonesia
              planetlagu. Gratis Lagu Barat Dangdut Koplo Full Album Terlengkap
              wapka mobi, download lagu barat hits terbaru 2022.
            </p>
          </a>

          <a
            href="https://rabbitmp3.cc/category/tiktok"
            className={styles.card}
          >
            <h2>Download Lagu Populer &rarr;</h2>
            <p>
              Kumpulan lagu populer dari berbagai belahan dunia kami sediakan
              gratis untuk kamu. Lihat beberapa lagu populer dibawah ini yang
              mungkin kamu sukai. Tenang saja, kamu bebas mencari lagu apapun
              yang kamu suka melalui kolom pencarian diatas.
            </p>
          </a>

          <a
            href="https://rabbitmp3.cc/category/dangdut"
            className={styles.card}
          >
            <h2>Situs Download Lagu Terbaru &rarr;</h2>
            <p>
              Rabbitmp3 adalah tempat download lagu terbaru dengan kualitas
              terbaik yang mudah dan cepat. Kamu bisa download lagu indo, lagu
              barat, lagu dj terbaru, lagu k-pop, lagu populer, lagu yang sedang
              trend, lagu religi, lagu anak-anak, dan lagu apapun yang kamu mau.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://rabbitmp3.cc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Rabbitmp3
        </a>
      </footer>
    </div>
  );
}
