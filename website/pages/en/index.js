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

    return (
      <Container background="light">
      <SplashContainer>
        <div className="inner">
          {/* <img src={siteConfig.baseUrl + 'img/Kubernetes_logo_without_workmark.svg'} alt="Logo" width="150" height="140" /> */}
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <button className="call-to-action" href="#try">Get Started Now</button>
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
          align="left"
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
              'Application setup in KAPP is quick and easy. Rather than hacking through complex yaml files, you can deploy and manage your entire applicatoin through the KAPP gui.',
            image: `${baseUrl}img/AppCreation1.svg`,
            imageAlign: 'right',
            title: 'Create and import applications easily',
          },
        ]}
      </Block>
    );
    
    const Story2 = () => (
      <Block background="dark">
        {[
          {
            content:
              'Organize your application into highly customizable component images. Server (continuous) and cron jobs are both supported.',
            image: `${baseUrl}img/ComponentCreation2.svg`,
            imageAlign: 'right',
            title: 'Quickly upload and manage application components',
          },
        ]}
      </Block>
    );

    const Story3 = () => (
      <Block background="light">
        {[
          {
            content:
              'You can config your environment so you can rock out like a pro. Config your config for config dawg. So many cool features it be like whoa!',
            image: `${baseUrl}img/Configs3.svg`,
            imageAlign: 'right',
            title: 'Configs and Environment Variables Rock',
          },
        ]}
      </Block>
    );

    const Story4 = () => (
      <Block background="dark">
        {[
          {
            content:
              'We love routes. We think routes are the shit and so should you. Here are a couple things that make routes on KAPP the bees knees',
            image: `${baseUrl}img/Routes4.svg`,
            imageAlign: 'right',
            title: 'Routes are awesome',
          },
        ]}
      </Block>
    );
    
    const Story5 = () => (
      <Block background="light">
        {[
          {
            content:
              'Check out this dashboard. It is epic. Look at the pretty graphs. Much awesome. Much wow. Very excite.',
            image: `${baseUrl}img/Dashboard5.svg`,
            imageAlign: 'right',
            title: 'Ultimate Dashboardy',
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
          <Story2 />
          <Story3 />
          <Story4 />
          <Story5 />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
