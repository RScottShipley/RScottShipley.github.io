import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';

const App = () => {
  return (
    <div className="App">
      <FullApp />
    </div>
  );
}

const FullApp = () => {
  return (
      <div className="Header-Brands-Container Redborder">
        <Header />
        <div className="Brands-Container Redborder">
          {data.map(sinBrand => {
            return <Brand name={sinBrand["name"]}
            homepage={sinBrand["homepage"]}
            pictures={sinBrand["pictures"]}
            ID={sinBrand["ID"]}
            price={sinBrand["price"]}
            tags={sinBrand["tags"]} />
          })}
        </div>
      </div>
  )
}
//Header of webpage, just title for now
const Header = () => {
  return (
    <div className="Header Redborder">
      <h1>Cultivate</h1>
    </div>
  );
}

//NEED TO DO: SearchBar & Filter - make work

//Each individual Brand will represent a brand object
const Brand = (props) => {
  return (
    <div className="Brand Redborder">
      <Brandheader name={props.name} 
      homepage={props.homepage}/>
      <PictureWheel pictures={props.pictures}
      homepage={props.homepage}/>
    </div>
  )
}
//Wheel of pictures for each brand
const PictureWheel = (props) => {
  const [pictures, setPictures] = useState([]);
  const estabPic = () => {
    let picturesTemp = props.pictures;
    let picturesArray = [];
    if (picturesTemp) {
      picturesArray = picturesTemp.split(";").map(pic => pic.trim());
    } 
    for (let i = 0; i < 10; i++) {
      if (!picturesArray[i]) {
        picturesArray[i] = placeHolderPic;
      }
    }
    setPictures(picturesArray);
  }

  useEffect(() => {
    estabPic();
  }, []);

  return (
    <div className="Brand-Picture-Wheel Redborder">
      {pictures.map(picture => {
        return <Picture pictureSrc={picture} homepage={props.homepage} />
      })}
    </div>
  );

}

//Pictures for framing the images and storing them into wheels
const Picture = (props) => {
  return (
    <a href={props.homepage} target="_blank">
      <img src={props.pictureSrc} alt="cute dog"/>
    </a>
  );
}
//Header for each Brand, just titles for now
const Brandheader = (props) => {
  return (
    <div className="Brand-Header Redborder">
      <h1>{props.name}</h1>
    </div>
  )
}

let placeHolderPic = "https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg";

//"name", "homepage", "pictures" (String seperated by ;), "ID", "price", "tags"
let data = [
  {
      "name": "Gimaguas",
      "homepage": "https://gimaguas.com",
      "pictures": "https://cdn.shopify.com/s/files/1/0616/2225/5787/products/2022_06_14GIMAGUAS_P27_1093.jpg?v=1658324693&width=1920; https://cdn.shopify.com/s/files/1/0616/2225/5787/files/dapitan-girls.jpg?v=1661946081; https://cdn.shopify.com/s/files/1/0616/2225/5787/collections/17c578e50300397bdb10e933fd4dd4821917ea1f.jpg?v=1661350865",
      "bio": "About Gigamus \nFounded in 2018 by twins Claudia and Sayana Durany, Gimaguas is powered by relationships and conversation with the world around us.\n\nOur collections – many created in collaboration with artists and artisans that we admire, whether from Rajasthan or Formentera – are made for joyful moments, with a focus on carefree silhouettes, bespoke prints, technical knitwear and craft-inspired detail. All Gimaguas pieces are designed in Barcelona – Claudia and Sayana’s hometown – and most are proudly made in Spain.",
      "ID": "1",
      "price": "$",
      "tags": "European, Colorful"
  },
  {
      "name": "AYR",
      "homepage": "https://www.ayr.com/collections/bestsellers?gclid=CjwKCAjw7eSZBhB8EiwA60kCW5tDLrN4b5lD0oVIAIvqcEfd5f1OtQMcGg5UEn9FWYNC1JjZO_NuvBoCfZIQAvD_BwE",
      "pictures": "https://cdn.shopify.com/s/files/1/1212/1112/t/12/assets/banner-sphwind1WU7uDNaWwLAPq_512x.jpg?v=104340361932544377931660779524; https://cdn.shopify.com/s/files/1/1212/1112/t/12/assets/banner-nb1_9ZzYIcn_asCTVcE3x_512x.jpg?v=160303294186974173791660010202;  https://cdn.shopify.com/s/files/1/1212/1112/products/beatuniCAT_289b625c-6a96-4189-a081-3b5b29739d8e_960x.jpg?v=1660920146; https://cdn.shopify.com/s/files/1/1212/1112/products/Cat_960x.jpg?v=1602213881, https://cdn.shopify.com/s/files/1/1212/1112/products/itgirlCAT_960x.jpg?v=1657919256",
      "bio": "We’re about creating confidence through clothing. We want our clothes to carry you through every season of your life. We want them to make packing easier. We want getting dressed to feel like an exhale. We’re really into simplifying things.\n\nEverything we make is team-tested. We’re fit-obsessed design nerds, and we produce in small batches to ensure less waste. We're friends-and-family operated, independently owned. The team’s bicoastal and we bond over food.\n\nAYR stands for All Year Round (so do we) and it’s pronounced like “fresh air.”\n\nSometimes, the simplest things are the hardest to find. We're so happy you found us!",
      "ID": "2",
      "price": "$$",
      "tags": "socially consious, coastal, nautical"
  },
  {
      "name": "Rouje",
      "homepage": "https://us.rouje.com",
      "pictures": "https://media.cdn-rouje.com/cdn-cgi/image/width=938,height=1407,quality=66,v=6,f=auto/media/catalog/product/b/a/baguette-crocobeige-1.jpg; https://media.cdn-rouje.com/html/2021-08-11/img/desktop/v17.png, https://media.cdn-rouje.com/cdn-cgi/image/width=938,height=1407,quality=66,v=6,f=auto/media/catalog/product/l/o/lola-brodeeecru-1.jpg; https://media.cdn-rouje.com/cdn-cgi/image/width=938,height=1407,quality=66,v=6,f=auto/media/catalog/product/c/h/chloe-unirose-1.jpg; https://media.cdn-rouje.com/cdn-cgi/image/width=938,height=1407,quality=66,v=6,f=auto/media/catalog/product/d/a/daria-mixmatchrouge-1.jpg; https://media.cdn-rouje.com/cdn-cgi/image/width=938,height=1407,quality=66,v=6,f=auto/media/catalog/product/l/o/look8_rouje_ben__ryanbrabazon.jpg",
      "bio": "About Rouje: Jeanne Damas spent her childhood playing between the tables of her parents’ restaurant near Bastille. Barely taller than the counter, she liked to watch people eating, laughing, flirting, and conversing about anything and everything. In a way, that’s how Rouje came to be: from those memories, those Parisians she was observing, those women whose lives she marveled at. \n\nHer first icon is her mother. A woman with a very distinctive feminine style. As a teenager, she used to spend hours in the atelier of her neighbor, the fashion designer Nathalie Dumeix. She starts getting into photography, in front of the lens and behind it. Over the years, she trained her eye - as a model, as a muse, and as a creative director for capsule collections. These experiences cemented the looks she creates in her mind, all sharing that special something\n\nIn 2016, Rouje was born. Helped by a tight-knit group of creative friends, Jeanne directs and reinvents her dream wardrobe season after season: clothes designed by women, for women. As well as accessories and a beauty line, made to highlight women’s own personal styles and to let them express their femininity freely. \n\nJeanne Damas has always been inspired by the women around her and wanted to put them at the forefront. And to help those in need too: since 2016, Rouje has been supporting women rights charities. In 2021, Jeanne goes further by becoming an ambassador for La Maison des femmes of Saint-Denis.",
      "ID": "3",
      "price": "$$$",
      "tags": "parisian, workwear, beauty, feminine"
  },
  {
      "name": "Mushier Paris",
      "homepage": "https://musier-paris.com",
      "pictures": "",
      "bio": "",
      "ID": "4",
      "price": "$$",
      "tags": "edgy, classic, european, city girl"
  },
  {
      "name": "Mira Mikati",
      "homepage": "https://miramikati.com",
      "pictures": "",
      "bio": "",
      "ID": "5",
      "price": "$$$$",
      "tags": "european, colorful, fun"
  },
  {
      "name": "Find me now the label",
      "homepage": "https://www.findmenowthelabel.com",
      "pictures": "https://cdn.shopify.com/s/files/1/0410/7570/3976/files/AboutPg.png?v=1643325116;  https://cdn.shopify.com/s/files/1/0410/7570/3976/products/DSC_2929_1296x.jpg?v=1661885435; https://cdn.shopify.com/s/files/1/0410/7570/3976/files/DSC_7255_1296x.jpg?v=1655907647; https://cdn.shopify.com/s/files/1/0410/7570/3976/products/DSC_4697_1296x.jpg?v=1657811986; https://cdn.shopify.com/s/files/1/0410/7570/3976/products/SYS622633ac3794d024065014622633ac37958.622633ac37958_1296x.jpg?v=1656914167",
      "bio": "",
      "ID": "6",
      "price": "$",
      "tags": "NYC, colorful, y2k, comfort, trendy"
  },
  {
      "name": "Kookai",
      "homepage": "https://www.kookai.us",
      "pictures": "",
      "bio": "",
      "ID": "7",
      "price": "$",
      "tags": "basics, wardrobe staples, classic, simple, socially consious"
  },
  {
      "name": "No Maintenance",
      "homepage": "https://www.nomaintenance.us",
      "pictures": "",
      "bio": "",
      "ID": "8",
      "price": "$$",
      "tags": "mens, vintage, staples, colorful, artistic"
  },
  {
      "name": "Noiranca",
      "homepage": "https://www.noiranca.com",
      "pictures": "",
      "bio": "",
      "ID": "9",
      "price": "$$",
      "tags": "handbags, accessories, leathe, trendy, fashion forward"
  },
  {
      "name": "Knwls",
      "homepage": "https://knwls.com",
      "pictures": "",
      "bio": "",
      "ID": "10",
      "price": "$$$",
      "tags": "european, dark, edgy, futuristic"
  },
  {
      "name": "Isaboulder",
      "homepage": "https://isaboulder.com",
      "pictures": "",
      "bio": "",
      "ID": "11",
      "price": "$$",
      "tags": "sustainabie,swimwear, trendy, social consious, colorful, feminine"
  },
  {
      "name": "Coperni",
      "homepage": "https://us.coperniparis.com",
      "pictures": "",
      "bio": "",
      "ID": "12",
      "price": "$$$$",
      "tags": "sporty, futuristic, night life, casual"
  },
  {
      "name": "Sister and seekers",
      "homepage": "https://sistersandseekers.com",
      "pictures": "",
      "bio": "",
      "ID": "13",
      "price": "$",
      "tags": "edgy, sporty, trendy, casual, lifestyle, athleisure"
  },
  {
      "name": "God Saves queens",
      "homepage": "https://godsavequeens.com",
      "pictures": "",
      "bio": "",
      "ID": "14",
      "price": "$$$",
      "tags": "sexy, lingerie, accessories, fashion forward, edgy"
  },
  {
      "name": "Source unknown",
      "homepage": "https://sourceunknown.com",
      "pictures": "",
      "bio": "",
      "ID": "15",
      "price": "$$",
      "tags": "classic, trendy, workwear, fashion forward, minimalist"
  },
  {
      "name": "Aelfric eden",
      "homepage": "https://www.aelfriceden.com",
      "pictures": "",
      "bio": "",
      "ID": "16",
      "price": "",
      "tags": "streetwear, graphic, asian streetwear, unique, colorful"
  },
  {
      "name": "Two bodies",
      "homepage": "https://two-bodies.com",
      "pictures": "",
      "bio": "",
      "ID": "17",
      "price": "$$$",
      "tags": "sexy, elegant, formal, New York, socially consious"
  },
  {
      "name": "Few moda",
      "homepage": "https://www.fewmoda.com",
      "pictures": "",
      "bio": "",
      "ID": "18",
      "price": "$",
      "tags": "everyday wear,  quality, casual, cottagecore, normcore, basics, wardrobe staples, workwear"
  },
  {
      "name": "The commense",
      "homepage": "https://thecommense.com",
      "pictures": "",
      "bio": "",
      "ID": "19",
      "price": "$",
      "tags": "everyday wear,  quality, casual, cottagecore, normcore, basics, wardrobe staples, workwear"
  },
  {
      "name": "Lesset",
      "homepage": "https://www.leset.com",
      "pictures": "",
      "bio": "",
      "ID": "20",
      "price": "$$$",
      "tags": "classic, coastal, wardrobe staples, basics, quality"
  },
  {
      "name": "Able clothing",
      "homepage": "Able clothing.com",
      "pictures": "",
      "bio": "",
      "ID": "21",
      "price": "$$",
      "tags": "coastal, basics, quality, everyday wear"
  },
  {
      "name": "Oak and Fort",
      "homepage": "https://www.oakandfort.com",
      "pictures": "",
      "bio": "",
      "ID": "22",
      "price": "$$",
      "tags": "classic, workwear, City Girl, staples, timeless, academia"
  },
  {
      "name": "Meshki",
      "homepage": "meshki.us",
      "pictures": "",
      "bio": "",
      "ID": "23",
      "price": "$",
      "tags": "sexy, elegant, formal, night life"
  },
  {
      "name": "Leau",
      "homepage": "Leauclothing.com",
      "pictures": "",
      "bio": "",
      "ID": "24",
      "price": "$$",
      "tags": "sexy, elegant, formal, night life"
  },
  {
      "name": "Are you am I",
      "homepage": "https://www.areyouami.com",
      "pictures": "",
      "bio": "",
      "ID": "25",
      "price": "$$$",
      "tags": "edgy, city girl, femine, sporty, going out, nightlife, ethical, classic"
  },
  {
      "name": "Maniere devoir",
      "homepage": "https://www.manieredevoir.com",
      "pictures": "",
      "bio": "",
      "ID": "26",
      "price": "$",
      "tags": "mens, edgy, dark, artistic, european,"
  },
  {
      "name": "Dissh",
      "homepage": "Dissh.com",
      "pictures": "",
      "bio": "",
      "ID": "27",
      "price": "$",
      "tags": "classic, neutral, basics, closet staples"
  },
  {
      "name": "leatheracci",
      "homepage": "leatheracci.com",
      "pictures": "",
      "bio": "",
      "ID": "28",
      "price": "$$$$",
      "tags": "leather, edgy, vintage, denim, biker, sustainable, custom, performance, musicians"
  },
  {
      "name": "cos",
      "homepage": "cos.com",
      "pictures": "",
      "bio": "",
      "ID": "29",
      "price": "$",
      "tags": "simple, essentials, classic, parisian, quality, staple pieces,"
  },
  {
      "name": "thistle and spire",
      "homepage": "https://www.thistleandspire.com",
      "pictures": "",
      "bio": "",
      "ID": "30",
      "price": "$",
      "tags": "sexy, lingerie, edgy"
  },
  {
      "name": "arket",
      "homepage": "arket.com",
      "pictures": "",
      "bio": "",
      "ID": "31",
      "price": "$$",
      "tags": "simple, classic, baby, home, women, swedish, european, closet staples"
  },
  {
      "name": "adanola",
      "homepage": "adanola.com",
      "pictures": "",
      "bio": "",
      "ID": "32",
      "price": "$",
      "tags": "simple, basics, european, loungewear, comfy"
  },
  {
      "name": "djerf avenue",
      "homepage": "https://djerfavenue.com",
      "pictures": "",
      "bio": "",
      "ID": "33",
      "price": "$",
      "tags": "simple, basics,"
  },
  {
      "name": "sundarbay",
      "homepage": "sundarbay.com",
      "pictures": "",
      "bio": "",
      "ID": "34",
      "price": "$",
      "tags": "classic, european, neutrals, workwear,"
  },
  {
      "name": "fuschia shaw",
      "homepage": "https://fuchsiashaw.com",
      "pictures": "",
      "bio": "",
      "ID": "35",
      "price": "$",
      "tags": "classic, neutrals, workwear, colorful,"
  },
  {
      "name": "sla the label",
      "homepage": "https://www.slathelabel.com",
      "pictures": "",
      "bio": "",
      "ID": "36",
      "price": "$",
      "tags": "going out, night out, lounge wear"
  },
  {
      "name": "lovers and friends",
      "homepage": "https://www.loversandfriends.us",
      "pictures": "",
      "bio": "",
      "ID": "37",
      "price": "$$",
      "tags": "going out, city life, formal, cocktail, trendy,"
  },
  {
      "name": "BOA",
      "homepage": "https://www.becauseofalice.com/en-us#",
      "pictures": "",
      "bio": "",
      "ID": "38",
      "price": "$",
      "tags": "chic, classic, closet staples, neutral,"
  },
  {
      "name": "insignia MSA",
      "homepage": "https://insigniamsa.com",
      "pictures": "",
      "bio": "",
      "ID": "41",
      "price": "$",
      "tags": "slow fashion, dystopian, punk, subversive, sustainable, festival, ethical, handmade"
  },
  {
      "name": "dexter",
      "homepage": "https://www.dexter-us.com/shop",
      "pictures": "",
      "bio": "",
      "ID": "42",
      "tags": ""
  },
  {
      "name": "roller rabbit",
      "homepage": "https://rollerrabbit.com/collections/womens-new-arrivals",
      "pictures": "",
      "bio": "",
      "ID": "44",
      "price": "$$",
      "tags": "preppy, colorful, southern, baby, patterns, BBQ, vibrant, ready to wear, sleepwear"
  },
  {
      "name": "caspar the label",
      "homepage": "https://www.casparthelabel.co.uk",
      "pictures": "",
      "bio": "",
      "ID": "46",
      "price": "$",
      "tags": "european, edgy, city girl, cargo, festival, handmade"
  },
  {
      "name": "marshall columbia",
      "homepage": "https://marshallcolumbia.com/collections/all",
      "pictures": "",
      "bio": "",
      "ID": "47",
      "price": "$$$",
      "tags": "y2k, colorful, maximillist, neon, accessories"
  },
  {
      "name": "the frankie shop",
      "homepage": "https://thefrankieshop.com",
      "pictures": "",
      "bio": "",
      "ID": "48",
      "price": "$$",
      "tags": "classic, staples, workwear, mens, womens, european"
  },
  {
      "name": "house of sunny",
      "homepage": "https://www.houseofsunny.co.uk/aw22",
      "pictures": "",
      "bio": "",
      "ID": "49",
      "price": "$",
      "tags": "trendy, unique, european, playful, colorful"
  },
  {
      "name": "ganni",
      "homepage": "ganni.com",
      "pictures": "",
      "bio": "",
      "ID": "50",
      "price": "$$$",
      "tags": "scandanavian, parisian, trendy, street-style,  contemporary, cool girl, effortless, clean, casual, brunch"
  },
  {
      "name": "cool is a construct",
      "homepage": "https://coolisaconstruct.com",
      "pictures": "",
      "bio": "",
      "ID": "52",
      "price": "$",
      "tags": "going out, corsets, swimwear, colorful"
  },
  {
      "name": "Miaou",
      "homepage": "miaou.com",
      "pictures": "",
      "bio": "",
      "ID": "53",
      "price": "$$",
      "tags": "festival, club, rave, edgy, city girl, corsets, empowering, femme fatal"
  },
  {
      "name": "Monsoon",
      "homepage": "Monsoonlondon.com ",
      "pictures": "",
      "bio": "",
      "ID": "54",
      "price": "$$",
      "tags": "formal, ballgown, cocktail, workwear, classy, sophisticated, 30-40, sustainable,"
  },
  {
      "name": "Amantine ",
      "homepage": "shopamantine.com",
      "pictures": "",
      "bio": "",
      "ID": "55",
      "price": "$",
      "tags": "classy, romantic, brunch, dresses, feminine"
  },
  {
      "name": "12th tribe",
      "homepage": "12thtribe.com",
      "pictures": "",
      "bio": "",
      "ID": "56",
      "price": "$",
      "tags": "city girl, trendy, boutique, going out,"
  },
  {
      "name": "ruve shop",
      "homepage": "ruveshop.com",
      "pictures": "",
      "bio": "",
      "ID": "57",
      "price": "$",
      "tags": "european, edgy, city girl, streetwear, going out, festival, desert"
  },
  {
      "name": "Nissa ",
      "homepage": "Https://nissanewyork.com",
      "pictures": "",
      "bio": "",
      "ID": "58",
      "price": "$",
      "tags": ""
  }
]

export default App;

