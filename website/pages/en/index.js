/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <Container background="light">
      <SplashContainer>
        <div className="inner">
              
              <img src={siteConfig.baseUrl + 'img/Kubernetes_logo_without_workmark.svg'} alt="Logo" width="150" height="140" />
              <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
              <PromoSection>
                <Button href="#try">Get Started Now</Button>
              </PromoSection>
        </div>
      </SplashContainer>
      </Container>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );
    
    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Open Source</h2>
        <MarkdownBlock>Kalm is installed as a webapp and a Kubernetes operator.</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block background="dark" id="try">
        {[
          {
            content:
              'Kalm contains basic and advanced deployment configurations powered by Istio. Easily maximize your uptime, roll out new features safely, scale your appication, and rollback as needed. ',
            image: `${baseUrl}img/node_scheduling2.png`,
            imageAlign: 'right',
            title: 'Deploy With Power',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
          },
        ]}
      </Block>
      
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Highly configurable automated health checks help keep your application running smoothly.',
            image: `${baseUrl}img/health_setup4.png`,
            imageAlign: 'right',
            title: 'Automated Health Checks',
          },
        ]}
      </Block>
    );

    const Story3 = () => (
      <Block background="light">
        {[
          {
            content:
              'Highly configurable automated health checks help keep your application running smoothly.',
            image: `${baseUrl}img/health_setup2.png`,
            imageAlign: 'right',
            title: 'Part 3 of the story',
          },
        ]}
      </Block>
    );

    const Story4 = () => (
      <Block background="dark">
        {[
          {
            content:
              'Highly configurable automated health checks help keep your application running smoothly.',
            image: `${baseUrl}img/health_setup2.png`,
            imageAlign: 'right',
            title: 'Part 4 of the story',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Say goodbye to awkward hacking and hand-holding on yml files. With Kalm, lead developers can quickly configure a robust and streamlined workflow for the entire team.',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'For Developers',
          },
          {
            content: 'Harness the full power of Kubernetes without losing complex features. You can customize every aspect of your development configuration with Kalm.',
            image: `${baseUrl}img/undraw_upgrade_06a0.svg`,
            imageAlign: 'top',
            title: 'Power and Precision',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Features />
            commenting this part out for now*/}
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Story3 />
          <Story4 />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
