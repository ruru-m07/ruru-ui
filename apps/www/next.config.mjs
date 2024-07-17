import createMDX from 'fumadocs-mdx/config';
import { remarkInstall } from 'fumadocs-docgen';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  remarkPlugins: [remarkInstall],
};

export default withMDX(config);
