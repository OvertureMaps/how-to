/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Overture Data',
      link: {
        type: 'doc',
        id: 'getting-data/index'
      },
      collapsed: true,
      items: [
        'getting-data/athena-aws',
        'getting-data/synapse-azure',
        'getting-data/duckdb',
        'getting-data/sedona',
        'getting-data/overturemaps-py',
      ]
    },
    {
      type: 'category',
      label: 'Examples',
      link: {
        type: 'doc',
        id: 'examples/index'
      },
      collapsed: true,
      items: [
        'examples/kepler-gl',
        'examples/rapid-id',
        'examples/build-a-map',
        'examples/QGIS',
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'doc',
        id: 'guides/index'
      },
      collapsed: true,
      items: [
        'guides/base',
        'guides/buildings',
        'guides/divisions',
        'guides/places',
        'guides/transportation',
      ],
    },
    {
      type: 'category',
      label: 'Global Entity Reference System',
      link: {
        type: 'doc',
        id: 'gers/index'
      },
      collapsed: true,
      items: [
        'gers/stability',
        'gers/changelog',
      ]
    },
    'attribution'
  ],
  schema:[
    {
      type: 'autogenerated',
      dirName: 'schema', // generate sidebar slice from the docs folder (or versioned_docs/<version>)
    }
  ]
};

module.exports = sidebars;
