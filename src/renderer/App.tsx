import { Button } from 'primereact/button'

import './styles.css'

export function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">Electron • Vite • React • PrimeReact • Vitest</p>
        <h1>Desktop app starter</h1>
        <p className="description">
          Build a modern Electron application with a fast Vite-powered React renderer, PrimeReact
          components, and Istanbul-backed Vitest coverage.
        </p>
        <div className="actions" aria-label="Useful project commands">
          <code>npm run dev</code>
          <code>npm test</code>
          <code>npm run coverage</code>
          <code>npm run docs</code>
        </div>
        <Button className="prime-action" label="Start building" type="button" />
      </section>
    </main>
  )
}
