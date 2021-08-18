import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Powered by Docusaurus',
    Svg: require('../../static/my-img/航天飞机.svg').default,
    description: (
      <>
        This website is powered by Docusaurus.Dinosaurs are cool!
        This website use icons from 
        <a href='https://www.iconfont.cn/illustrations/detail?spm=a313x.7781069.1998910419.d9df05512&cid=24963' > iconfont.cn </a> 
        
      </>
    ),
  },
  {
    title: 'Notes and Tools',
    Svg: require('../../static/my-img/横向漂浮宇航员.svg').default,
    description: (
      <>
        Contains some tools and notes for learning ASM in Dos
      </>
    ),
  },
  {
    title: 'Open',
    Svg: require('../../static/my-img/星系.svg').default,
    description: (
      <>
       All works are open on Github and Gitee.
       The project still in dev. There are many bugs and errors
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
