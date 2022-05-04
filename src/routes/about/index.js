import style from './style.css';
import SafeLink from '../../components/safe-link';

const About = () => {
  return (
    <div class="mainContentContainer">
      <div class="sectionHeading">About</div>
      <div class={style.about}>
        <div class={style.description}>
          Software developer and generative artist based in Pittsburgh, PA
        </div>
        <p>
          Currently a software engineer working on map-based applications at
          Aurora Innovation utilizing{' '}
          <SafeLink href="https://deck.gl/">Deck.gl</SafeLink>. Pursuing
          personal generative projects using{' '}
          <SafeLink href="https://www.p5js.org">p5.js</SafeLink> and{' '}
          <SafeLink href="https://threejs.org/">Three.js</SafeLink>. Recently
          exploring{' '}
          <SafeLink href="https://twitter.com/SamNosenzo/status/1227116031115747328?s=20">
            polygon line-fill/hatching methods
          </SafeLink>{' '}
          for pen-plotting.
        </p>
        <p>Always looking for creative opportunities and projects!</p>
        <p>
          Feel free to reach out on twitter or @ samnosenzo[at]gmail(dot)com
        </p>
        <p>
          <SafeLink href="/assets/resume.pdf">Résumé</SafeLink>
        </p>
      </div>
    </div>
  );
};

export default About;
