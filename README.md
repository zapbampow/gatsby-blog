# Gatsby Blog
This is a custom headless wordpress theme that uses Gatsby to serve it as a static site and make it much quicker than a traditional Wordpress site. This is set up for a self-hosted wordpress site, but you can edit wordpres-config.js and change the gatsby-source package to work for a wordpress.com site.

## Install
1. First, you need to make sure gatsby is installed
`npm install --global gatsby-cli`
2. Clone and install the repository
`npm clone https://github.com/zapbampow/gatsby-blog.git`
`npm install`
3. Fix any vulnerabilities that have popped up.
`npm audit fix`
4. If you `gatsby develop` this, then you will be pulling data from not your blog. So you need to make a few changes to start getting your data.
5. In gatsby-config.js, change the siteMetadata to be your wordpress. At this point, the queries built in will be pulling from your site. In order for this to actually look good, your posts need to have a featured image. All the images in the main index.js page come from featured images in posts.
6. Now it's up and running for you. Congrats!
7. Begin customizing the components. 
    - Change the header image in the Header component.
    - The nav bar links in the Navbar component.
    - Change the social links in the TopBar component.
    - Open the Footer component and customize it to your site.
    - Finally, you can change the colors of everything, but you'll need to go through the components and their module.css files to do that yourself.

