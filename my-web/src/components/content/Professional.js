import React, {Component} from 'react';
import thesis from './ajs_thesis.pdf';

export default class Professional extends Component {
  render() {
    return (
      <div className="content">
        <p>
          I am currently a software engineer at ProNvest, a small financial tech
          company. I write a lot of C#/.NET code, and it keeps me pretty busy. A
          link to my LinkedIn is up and right.
        </p>

        <p>
          I'm familiar with a lot of languages, paradigms, and different stack
          components. I've worked on several projects in software. A link to my
          GitHub is up and right.
        </p>
        <p>
          I was formerly a post-doctoral mathematician, at the University of
          Georgia. Prior to that, I received my Ph.D. in mathematics from the
          University of Illinois at Chicago under the advisement of Professor
          Izzet Coskun. My thesis concerns the intersection theory on the
          Hilbert scheme of points in the projective plane.{' '}
          <a href={thesis}>Here is a link to my thesis</a>.
        </p>
      </div>
    );
  }
}
