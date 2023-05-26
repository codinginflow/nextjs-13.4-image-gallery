import { Alert } from "@/components/bootstrap";

export default function Home() {
  return (
    <div>
      <Alert>
        <p>
          This is a sample project to showcase and learn the new <strong>NextJS 13 app directory</strong> and its features, including:
        </p>
        <ul>
          <li>static and dynamic server-side rendering</li>
          <li>incremental static regeneration</li>
          <li>client-side rendering</li>
          <li>route handlers (API endpoints)</li>
          <li>meta-data API</li>
          <li>and more</li>
        </ul>
        <p className='mb-0'>
          Every page uses a different approach to <strong>fetching and caching data</strong>. Click the links in the nav bar to try them out.
        </p>
      </Alert>
      <Alert variant='secondary'>
        <p>Note: In order to load the data on this site, you need to get a <a href="https://unsplash.com/developers">free API key from Unsplash</a> and add it to your <code>.env.local</code> file as <code>UNSPLASH_ACCESS_KEY</code>.</p>
        <p className='mb-0'>Unsplash has a free quota of 50 requests per hour so you might start getting errors if you try too often.</p>
      </Alert>
    </div>
  )
}
