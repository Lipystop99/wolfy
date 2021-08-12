const imgfile = require("../../images/foodimg.js");
const { MessageEmbed } = require('discord.js');
let foods = [
    'https://images-ext-2.discordapp.net/external/s_z1gUNyy-XPpY9j0xUnoLvRSaMi3KykwDxIBUfHAqo/%3Fquality%3D90%26resize%3D440%2C400/https/images.immediate.co.uk/production/volatile/sites/30/2020/08/caponata-pasta-a0027c4.jpg',
    'https://images-ext-1.discordapp.net/external/u5JcYKfRGVjg3ATrlUjsYZWX0EZIEdHzqfrpYj6-U18/https/i.ytimg.com/vi/QyWTHVvlBTw/maxresdefault.jpg',
    'https://images-ext-1.discordapp.net/external/8nr-C3r_GLvpruP0w4jmjNEypRCJK17hM07UmWU_h7g/https/goodfood.hr/wp-content/uploads/2017/10/147.jpg',
    'https://images-ext-1.discordapp.net/external/0T_WQmXcy4hEzJBonUKLzNVDqlQ7xbDt0PID6UE8Uhk/https/hips.hearstapps.com/del.h-cdn.co/assets/18/06/1517928338-delish-mongolian-ramen-and-meatballs-still001.jpg',
    'https://static01.nyt.com/images/2020/04/22/dining/21milkbarrex2/merlin_171379644_8f93d0c8-c7ca-41ae-a8f0-e09b4d0436ad-articleLarge.jpg',
    'https://www.seriouseats.com/images/2014/03/20140318-287069-sweet-cheese-pierogies-platter.jpg',
    'https://sweetandsavorymeals.com/wp-content/uploads/2019/01/Fried-Cheese-Sticks-2.jpg',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1526675512%2FPan-Bagnat.jpg',
    'https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg',
    'https://iso.500px.com/wp-content/uploads/2020/02/Sushi-and-sashimi-variety-on-rustic-background-By-Alena-Haurylik-2.jpeg',
    'https://i.redd.it/eaqafyhttdr11.jpg',
    'https://www.food.porn/assets/img/Foodporn-Placeholder.jpg',
    'https://files.thehandbook.com/uploads/2019/07/scotch-egg-beara-beara-1.jpg',
    'https://lh3.googleusercontent.com/proxy/nqaOZklSdXMC14NIiK2SDfwG1apIvmb4jRe-X_tm04LZuVFGZtd24KLzbBins8k06QH4W7uo8ESDnZwPrh96kzPHN2VzR1euLdnaCLA1yzvo2k6xSqLDlMtizMLB5StDWHk',
    'https://pbs.twimg.com/media/Bp1tVlhCEAAVOjN.jpg',
    'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
    'https://cdn.lifestyleasia.com/wp-content/uploads/sites/3/2020/05/04113706/monika-grabkowska-P1aohbiT-EY-unsplash-1350x900.jpg',
    'https://www.useyournoodles.eu/wp-content/uploads/how-to-take-the-perfect-action-shot-in-food-photograpy-01-Custom-1000x423.jpg',
    'https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/photography/hub/CODERED_B1_food-photography_hero-img_900x420.jpg.img.jpg',
    'https://format-com-cld-res.cloudinary.com/image/private/s--Re-uK2Tu--/c_limit,g_center,h_700,w_65535/fl_keep_iptc.progressive,q_95/v1/b49c7466c119301b37e6c6055f9a309b/BE_07_F_s.jpg',
    'https://inspirationfeed.com/wp-content/uploads/2018/02/Spitonys-pizza-night.jpeg',
    'https://www.thespruceeats.com/thmb/dl-9Ul-g-RGABH0QScAt0k8FVdM=/4494x3000/filters:fill(auto,1)/recipe-for-three-cheese-ravioli-909235-hero-5c3800ca46e0fb000133eed7.jpg',
    'https://dinnerthendessert.com/wp-content/uploads/2016/04/Ultimate-Meat-Lasagna-3-1.jpg',
    'https://www.handletheheat.com/wp-content/uploads/2013/10/Soft-Chocolate-Chip-Cookies-SQUARE.jpg',
    'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/6-chocolate-chip-cookies.jpg',
    'https://cdn.discordapp.com/attachments/788689207044341770/788707928382767114/21208572_6a22163c080f81b5c3fc22a01ee3c7fe_wm.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWu385d9-TngMLLO7Yq3BAWtWZdBLDWvHA2A&usqp=CAU',
    'https://www.thespruceeats.com/thmb/S9G03vlc_89yA6rxdiIz_DbAz6g=/3000x2000/filters:fill(auto,1)/lithuanian-stuffed-cabbage-rolls-56c28f1c3df78c0b138f80e2.jpg',
    'https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg',
    'https://cdn.discordapp.com/attachments/788689207044341770/788708785907957790/Soba-Noodles-016.png',
    'https://cdn.discordapp.com/attachments/788689207044341770/788709039382855710/k2Farchive2Fb59db29cc4b7bc1052d028ea9f4f00078d066b1f.png',
    'https://www.cookingclassy.com/wp-content/uploads/2019/03/swedish-meatballs-05.jpg',
    'https://retete.unica.ro/wp-content/uploads/2010/07/2-profiterol.jpg',
    'https://www.teoskitchen.ro/wp-content/uploads/2012/12/profiterol-cu-crema-de-lamaie-1.jpg',
    'https://glamnews.ro/wp-content/uploads/2019/02/IMG_3964.jpg',
    'https://sugargeekshow.com/wp-content/uploads/2019/01/triple-chocolate-cake-recipe.jpg',
    'https://images-gmi-pmc.edge-generalmills.com/d48f476f-ab97-4edf-8d5b-d617e5f261d0.jpg',
    'https://lh3.googleusercontent.com/proxy/E_yiIISbLZw8yD-ICO-eiZFFeVbXDEzDBBZSh-I9Tp4AyTObCILg0EUPDL3khid13K6BNGOgUp1pHJn77bCJzGv9jJyPlvy5nOCFHnIEIC7XA6eld-GH7VppIsfRi2kdVio_L0oBhcjgN-sNJ88jMLiXRKdMgg',
    'https://tastehungary.com/wp-content/uploads/2018/09/Zsi%CC%81ros-kenye%CC%81r-in-Budapest.jpg',
    'https://media2.s-nbcnews.com/j/newscms/2020_13/1552784/breadbaking_3eea3dc71fddb8ad629ceb76dbc447db.today-inline-small2x.jpg',
    'https://asset.slimmingworld.co.uk/content/media/8244/classic-spaghetti-carbonara_sw_recipe.jpg?v1=JGXiore20qg9NNIj0tmc3cgFcaNYGK7xfXL6DoxugKF0EcSXTHJm4c7aYYdF6LqjdcKc_olcqwmun1DG9IBwYXZ2npCFqvx--GhUsyEWz20&width=1200&height=630',
    'https://easyweeknight.com/wp-content/uploads/2019/02/spaghetti-carbonara4.jpg',
    'https://lh3.googleusercontent.com/proxy/m3GtR_F90Vx3zvI14UrvmWd1em8wFVMvgBCNAR6lVbFwELJmcZxlVAeYY63NQmqAsQe05aynXliGiPWiy-LWHJsDFiXwFaZ0PWXjkNczEcvtUQRa9VwMVT9ztCf-fu0DNCc5H6mm2InYG4luZB0IO3aNp5QTTg',
    'https://img.taste.com.au/5qlr1PkR/taste/2016/11/spaghetti-bolognese-106560-1.jpeg',
    'https://cdn.discordapp.com/attachments/788689207044341770/788712073722986526/IMG_20201209_121335.jpg',
    'https://realfood.tesco.com/media/images/1400x919-SpaghettiCarbonara-557b6ff5-c4f3-4565-ae8e-a506f7dcc415-0-1400x919.jpg',
    'https://i.imgur.com/OiIFyvW.jpg',
    'https://tul.imgix.net/content/article/a_list_images/who-to-follow-on-instagram-foodies-thesugarhit-Screen%20Shot%202014-06-19%20at%202.20.39%20PM.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuO0CrvnzM690cdnzSy0zAUTYT5vQUD2IqA&usqp=CAU',
    'https://i.imgur.com/L8Mwral.jpg',
    'https://lh3.googleusercontent.com/proxy/uSf4QvW5e4mtShcSixLLjVBO-ZRCqn5tCPhtgB--Bry0BwgEkMoAg9nCdiaFvKLb1KIdIY9C-BNW-Vlm0tsiEcy8_5cdlh7brM5yARPRAxZPPLNfCDFgqJP_QmdvjiaAc0zIw56D',
    'https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-3-700x909.jpg',
    'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG1jZG9uYWxkcyUyMGZyaWVzfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERTX9dh0NCQYjQMC-KPFY8mj4C-NpNnuC_A&usqp=CAU',
    'https://www.mindmegette.hu/images/208/O/edes-bundaskenyer.jpg',
    'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=750&h=393&url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd13%2Fbreak_01495_t%2Fbreak_01495_t_horiz.jpg%3Fitok%3DS4ENlj4-',
    'https://data.whicdn.com/images/334325070/original.jpg'
] 

module.exports = {
    name: "foodporn",
    category: "képes",
    run: async (client, message, args) => {
        let pic = foods[Math.floor(Math.random() * foods.length)];
        const embed = new MessageEmbed()
            .setTitle(`Nyami 🤤`)
            .setColor(`#f3f3f3`)
            .setImage(pic)

        await message.channel.send(embed)
    }
}