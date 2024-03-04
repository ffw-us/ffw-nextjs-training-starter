import styles from '@/app/page.module.css'

export async function getStaticProps() {

  return {
    props: {

    },
  };
}
export default function HomePR() {
  return (
    <main>
      <div>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>page/pr/index.tsx</code>
        </p>
      </div>
    </main>
  )
}
