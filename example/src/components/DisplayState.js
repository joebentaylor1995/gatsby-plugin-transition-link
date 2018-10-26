import React from 'react'
import { TransitionConsumer } from 'gatsby-plugin-transition-link'

function print_r(o) {
  if (typeof window === `undefined`) return

  return JSON.stringify(o, null, '\t')
    .replace(/\n/g, '<br>')
    .replace(/\t/g, '&nbsp;&nbsp;&nbsp;')
}

function DisplayState() {
  return (
    <TransitionConsumer>
      {context =>
        context ? (
          <section style={{ marginTop: '100px' }}>
            <h4>Current location state</h4>

            <pre dangerouslySetInnerHTML={{ __html: print_r(context) }} />
          </section>
        ) : null
      }
    </TransitionConsumer>
  )
}

export default DisplayState
