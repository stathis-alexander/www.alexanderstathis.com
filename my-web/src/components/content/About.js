import React, {Component} from 'react';

import mensmoo from './mensmoo.jpg';

class About extends Component {
  render() {
    return (
      <div className="content">
        <div className="profile">
          <img src={mensmoo} alt="" />
        </div>

        <p>
          Hello, and welcome to my little slice of the internet. I am a software
          engineer, a (former) algebraic geometer, a rock climber, and a person.
        </p>

        <p>
          I am an avid rock climber, and I have climbed all over the United
          States - primarily in the Southeast - as well as the South American
          countries Colombia and Cuba. I mostly sport climb and boulder, but I
          can occasionally be guilted into climbing on gear. No, I don't free
          solo.
        </p>

        <p>
          If you're interested in keeping up with those adventures,{' '}
          <a
            href="https://www.mountainproject.com/user/111504038/alexander-stathis"
            target="_blank"
            rel="noreferrer noopener">
            this is a link to my profile on Mountain Project
          </a>{' '}
          and{' '}
          <a
            href="https://www.8a.nu/user/alexander-stathis"
            target="_blank"
            rel="noreferrer noopener">
            this is a link to my 8a page
          </a>
          . There are also plenty of pictures of my friends climbing on my
          Instagram (link up and right).
        </p>

        <p>
          Outside of climbing, my hobbies include watching movies at the local
          indie theatre or at home on my couch with my cat Smooches, and
          struggling through any-day-after-wednesday crossword puzzles.
        </p>
      </div>
    );
  }
}

export default About;
