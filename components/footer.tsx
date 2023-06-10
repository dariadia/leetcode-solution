import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28">
            Github:
            <a
              target='_blank'
              href={`https://github.com/dariadia/`}
              className="mx-3 font-bold hover:underline"
            >
              @dariadia
            </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
