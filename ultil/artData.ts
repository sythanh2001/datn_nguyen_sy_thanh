export const artStyles = [
  "Abstract",
  "Impressionism",
  "Realism",
  "Surrealism",
  "Expressionism",
  "Cubism",
  "Pop Art",
  "Minimalism",
  "Fauvism",
  "Art Nouveau",
  "Baroque",
  "Renaissance",
  "Romanticism",
  "Gothic",
  "Contemporary",
  "Photorealism",
  "Pointillism",
  "Post-Impressionism",
  "Sculpture",
  "Digital Art",
  "Street Art",
  "Graffiti",
  "Illustration",
  "Conceptual Art",
  "Naïve Art",
  "Surrealist Photography",
  "Hyperrealism",
  "Installation Art",
  "Land Art",
  "Abstract Expressionism",
  "Modernism",
  "Classicism",
  "Academic Art",
  "Op Art",
  "Kinetic Art",
  "Geometric Abstraction",
  "Collage",
  "Deco Art",
  "Mosaic",
  "Portraiture",
  "Landscape",
  "Still Life",
  "Genre Painting",
  "War Art",
  "Religious Art",
  "Political Art",
  "Nature Photography",
  "Fashion Photography",
  "Macro Photography",
  "Street Photography",
  "Documentary Photography",
  "Wildlife Photography",
  "Architectural Photography",
  "Abstract Photography",
];

export const tags = [
    "landscape",
    "portrait",
    "nature",
    "cityscape",
    "architecture",
    "abstract",
    "macro",
    "street photography",
    "black and white",
    "colorful",
    "vintage",
    "urban",
    "wildlife",
    "close-up",
    "still life",
    "travel",
    "people",
    "animals",
    "food",
    "sports",
    "sunrise",
    "sunset",
    "night",
    "reflection",
    "water",
    "beach",
    "mountains",
    "forest",
    "sky",
    "clouds",
    "flowers",
    "city",
    "historic",
    "modern",
    "candid",
    "minimalism",
    "vibrant",
    "nostalgia",
    "long exposure",
    "fine art",
    "monochrome",
    "seasons",
    "autumn",
    "winter",
    "spring",
    "summer",
    "festive",
    "holiday",
    "celebration",
    "family",
    "friends",
    "pets",
    "birds",
    "insects",
    "ocean",
    "lake",
    "river",
    "waterfall",
    "desert",
    "countryside",
    "market",
    "street",
    "transportation",
    "adventure",
    "explore",
    "culture",
    "tradition",
    "landmarks",
    "contemporary",
    "conceptual",
    "experimental",
    "retro",
    "fashion",
    "accessories",
    "technology",
    "team sports",
    "individual sports",
    "extreme sports",
    "fitness",
    "healthy living",
    "cooking",
    "restaurant",
    "street food",
    "gourmet",
    "beverages",
    "desserts",
    "coffee",
    "tea",
    "wine",
    "beer",
    "cocktails",
    "starry night",
    "moonlight",
    "rain",
    "storm",
    "fog",
    "mist",
    "haze"
]

// Hàm để chọn ngẫu nhiên một phần tử từ mảng
function getRandomElement(arr: any) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Hàm để tạo một mảng chứa ngẫu nhiên artstyle và từ 3 đến 5 tag
function createRandomArtwork() {
  const selectedArtStyle = getRandomElement(artStyles[0]);
  const selectedTags = [];
  for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) {
    const tag = getRandomElement(tags);
    selectedTags.push(tag);
  }
  return {
    artStyle: selectedArtStyle,
    tags: selectedTags,
  };
}

export const products = [
  {
    title: "Vibrant Holiday Cityscape",
    describe:
      "Experience the energy of a vibrant holiday cityscape in this Installation Art piece.",
    artStyle: "Installation Art",
    tags: ["holiday", "cityscape", "vibrant"],
  },
  {
    title: "Abstract Birds: A Colorful Landscape",
    describe:
      "Explore abstract birds and a colorful landscape in this Documentary Photography work.",
    artStyle: "Documentary Photography",
    tags: ["birds", "abstract", "colorful", "landscape"],
  },
  {
    title: "Minimalistic Naïve Portrait",
    describe:
      "Discover a minimalistic Naïve Art portrait with a close-up perspective.",
    artStyle: "Naïve Art",
    tags: ["portrait", "minimalism", "minimalism", "close-up"],
  },
  {
    title: "Night Rain by the Ocean",
    describe:
      "Immerse yourself in a Pointillism artwork capturing night rain by the ocean with a touch of beverages.",
    artStyle: "Pointillism",
    tags: ["ocean", "night", "rain", "beverages"],
  },
  {
    title: "Gothic Night in the Mountains",
    describe:
      "Experience a Gothic night in the mountains with candid architecture and travel vibes.",
    artStyle: "Gothic",
    tags: ["night", "travel", "mountains", "candid", "architecture"],
  },
  {
    title: "Macro Urban Friends",
    describe:
      "Delve into the world of macro urban photography capturing the essence of friendship.",
    artStyle: "Street Art",
    tags: ["macro", "urban", "friends"],
  },
  {
    title: "Modern Forest Fashion Statement",
    describe:
      "Explore modern forest fashion in this intriguing Political Art piece.",
    artStyle: "Political Art",
    tags: ["modern", "forest", "fashion"],
  },
  {
    title: "City Street Celebration in Minimalism",
    describe:
      "Witness a city street celebration through the lens of Minimalism, where wildlife meets city life.",
    artStyle: "Conceptual Art",
    tags: ["city", "street", "celebration", "wildlife", "minimalism"],
  },
  {
    title: "Cubist Nostalgia: Sunset by the Ocean",
    describe:
      "Experience a Cubist perspective on a nostalgic ocean sunset with architectural elements in the countryside.",
    artStyle: "Cubism",
    tags: ["sunset", "ocean", "nostalgia", "architecture", "countryside"],
  },
  {
    title: "Op Art: Summer Still Life in the Forest",
    describe:
      "Delve into the world of Op Art with a summer still life set in a forest environment.",
    artStyle: "Op Art",
    tags: ["summer", "still life", "forest"],
  },
  {
    title: "Beach Beer Modernism",
    describe:
      "Experience modernism at the beach with beer as a central theme in this Photorealism piece.",
    artStyle: "Photorealism",
    tags: ["beach", "beer", "modern"],
  },
  {
    title: "Realism Portrait: Beer and Sports",
    describe:
      "A Realism portrait showcasing the connection between beer, sports, and fine art.",
    artStyle: "Realism",
    tags: ["portrait", "landscape", "beer", "sports"],
  },
  {
    title: "Minimalism Transportation: Sports and Wildlife",
    describe:
      "Explore the world of minimalism through transportation, sports, and wildlife in this Collage artwork amidst a storm.",
    artStyle: "Collage",
    tags: ["minimalism", "transportation", "sports", "wildlife", "storm"],
  },
  {
    title: "Mosaic Insects in the Street",
    describe:
      "Discover a mosaic of insects in an urban setting, blending technology and the spirit of summer.",
    artStyle: "Mosaic",
    tags: ["insects", "street", "technology", "summer"],
  },
  {
    title: "Naïve Art: Holiday Forest Long Exposure",
    describe:
      "Experience a holiday forest in a unique way through the lens of Naïve Art with a long exposure twist.",
    artStyle: "Naïve Art",
    tags: ["holiday", "forest", "long exposure"],
  },
  {
    title: "Pop Art Sunrise and Sunset for Healthy Living",
    describe:
      "Embrace the Pop Art interpretation of sunrises and sunsets, promoting the idea of healthy living.",
    artStyle: "Pop Art",
    tags: ["sunset", "sunrise", "healthy living"],
  },
  {
    title: "Collage: Urban Accessories and Wildlife Friends",
    describe:
      "Dive into the world of Collage, where urban accessories meet friends and wildlife in a dynamic composition.",
    artStyle: "Collage",
    tags: ["urban", "accessories", "friends", "wildlife"],
  },
  {
    title: "Romanticism: Colorful Gourmet Urban Vibes",
    describe:
      "Experience Romanticism with a twist of colorful, gourmet urban scenes that evoke modernity.",
    artStyle: "Romanticism",
    tags: ["colorful", "modern", "gourmet", "urban"],
  },
  {
    title: "Romanticism: Black and White Night in the Mountains",
    describe:
      "A Romanticism piece that captures the beauty of a black and white night amidst the mountains and nature.",
    artStyle: "Romanticism",
    tags: ["black and white", "mountains", "night", "nature"],
  },
  {
    title: "Political Art: Sunrise and Individual Sports by the Waterfall",
    describe:
      "A Political Art piece that explores the relationship between sunrise, individual sports, and the majesty of a waterfall.",
    artStyle: "Political Art",
    tags: ["sunrise", "individual sports", "waterfall"],
  },
  {
    title: "Street Art: Architecture, Culture, and Night Team Sports",
    describe:
      "A Street Art composition that merges architecture, culture, and the energy of night team sports.",
    artStyle: "Street Art",
    tags: ["architecture", "culture", "night", "team sports"],
  },
  {
    title: "Renaissance Vintage Technology and Gourmet Waterfall",
    describe:
      "A Renaissance-inspired artwork that combines vintage technology with the allure of a gourmet waterfall.",
    artStyle: "Renaissance",
    tags: ["vintage", "technology", "gourmet", "waterfall"],
  },
  {
    title: "Art Nouveau Waterfall: Long Exposure Transportation",
    describe:
      "Art Nouveau takes on a waterfall scene with a long exposure twist, highlighting the beauty of transportation.",
    artStyle: "Art Nouveau",
    tags: ["waterfall", "long exposure", "transportation"],
  },
  {
    title: "Starry Night Sports: Macro and Colorful",
    describe:
      "A sports-themed composition under a starry night sky, captured in a macro and colorful style.",
    artStyle: "Portraiture",
    tags: ["macro", "starry night", "sports", "colorful"],
  },
  {
    title: "Gothic Misty Celebration in the Cityscape",
    describe:
      "Experience a Gothic-themed, misty celebration amidst the cityscape.",
    artStyle: "Gothic",
    tags: ["mist", "culture", "celebration", "cityscape"],
  },
  {
    title: "Installation Art: Tea and Coffee in Autumn Gourmet",
    describe:
      "Installation Art that features tea, coffee, and a touch of autumn's gourmet essence in a minimalistic setting.",
    artStyle: "Installation Art",
    tags: ["tea", "minimalism", "coffee", "autumn", "gourmet"],
  },
  {
    title: "Art Nouveau Historic Healthy Living in the Cityscape",
    describe:
      "Art Nouveau meets historic vibes, promoting healthy living within the urban cityscape.",
    artStyle: "Art Nouveau",
    tags: ["historic", "healthy living", "cityscape"],
  },
  {
    title: "Street Art: Clouds, Architecture, and Holiday Vibes",
    describe:
      "Street Art captures the essence of clouds, architecture, and the holiday spirit.",
    artStyle: "Street Art",
    tags: ["clouds", "architecture", "holiday"],
  },
  {
    title: "Gothic Sports Night in the Forest",
    describe:
      "A Gothic masterpiece portraying a sports-filled night within the mystical forest.",
    artStyle: "Gothic",
    tags: ["sports", "starry night", "forest"],
  },
  {
    title: "Contemporary Wine Abstract Moonlight Portrait",
    describe:
      "Contemporary art with wine as a central theme, featuring abstract moonlight and a striking portrait.",
    artStyle: "Contemporary",
    tags: ["wine", "sunrise", "abstract", "moonlight", "portrait"],
  },
  {
    title: "Street Art: Wine, Flowers, and Fog",
    describe:
      "Street Art composition featuring wine, flowers, and an atmospheric touch of fog.",
    artStyle: "Street Art",
    tags: ["wine", "flowers", "fog"],
  },
  {
    title: "Gothic Architecture, Sports, and Family Moments",
    describe:
      "Gothic artistry portraying the fusion of architecture, sports, and cherished family moments.",
    artStyle: "Gothic",
    tags: ["architecture", "sports", "family"],
  },
  {
    title: "Street Art: Wine, Street, Cocktails, and Architecture",
    describe:
      "A Street Art composition blending wine, street life, cocktails, and architectural elements.",
    artStyle: "Street Art",
    tags: ["wine", "street", "cocktails", "architecture"],
  },
  {
    title: "Renaissance Street Food, Beer, Landscape, and Fog",
    describe:
      "Renaissance-inspired art featuring street food, beer, captivating landscapes, and a touch of fog.",
    artStyle: "Renaissance",
    tags: ["street food", "beer", "landscape", "fog"],
  },
  {
    title: "Sculpture: Water, Moonlight, Lake, and Conceptual Essence",
    describe:
      "A sculptural masterpiece portraying water, moonlight, the serenity of a lake, and a touch of conceptual artistry.",
    artStyle: "Sculpture",
    tags: ["water", "moonlight", "lake", "conceptual"],
  },
  {
    title: "Deco Art: Fashionable Urban Vintage",
    describe:
      "Embrace the world of Deco Art with a fashionable, urban, and vintage twist.",
    artStyle: "Deco Art",
    tags: ["fashion", "urban", "vintage"],
  },
  {
    title: "Conceptual Art: Gourmet Nature by the River",
    describe:
      "Conceptual Art that invites you to explore gourmet experiences in the lap of nature by the river.",
    artStyle: "Conceptual Art",
    tags: ["gourmet", "nature", "river", "fashion"],
  },
  {
    title: "Sculpture: Water, Architectural Rain, and Winter Beauty",
    describe:
      "A sculptural depiction of water, architectural elements amidst rain, and the tranquil beauty of winter.",
    artStyle: "Sculpture",
    tags: ["water", "architecture", "architecture", "rain", "winter"],
  },
  {
    title: "Naïve Art: Experimental Vintage Close-Up in Black and White",
    describe:
      "Naïve Art showcasing experimental, vintage, close-up scenes in captivating black and white with a touch of the seasons.",
    artStyle: "Naïve Art",
    tags: ["experimental", "vintage", "close-up", "black and white", "seasons"],
  },
  {
    title: "Landscape Celebration in the Countryside",
    describe:
      "An expressive landscape art capturing the essence of celebration in the serene countryside.",
    artStyle: "Landscape",
    tags: ["celebration", "countryside", "modern"],
  },
  {
    title:
      "Wildlife Photography: Landmarks, Extreme Sports, Sunset, and Desert",
    describe:
      "A captivating Wildlife Photography composition featuring landmarks, extreme sports, vibrant sunsets, and the vast desert.",
    artStyle: "Wildlife Photography",
    tags: ["landmarks", "extreme sports", "sunset", "desert"],
  },
  {
    title: "Kinetic Art: Architectural Seasons, Vintage, and Family",
    describe:
      "Kinetic Art in an architectural setting that embraces the changing seasons, vintage vibes, and cherished family moments.",
    artStyle: "Kinetic Art",
    tags: ["architecture", "seasons", "vintage", "family"],
  },
  {
    title: "Graffiti Holiday Travels in Sunrise and Sunset",
    describe:
      "A Graffiti-style artistry portraying holiday travels amidst the captivating colors of sunrise and sunset.",
    artStyle: "Graffiti",
    tags: ["holiday", "travel", "sunrise", "sunset"],
  },
  {
    title:
      "Impressionism: Countryside Birds, Architectural Beauty, and Riverside Serenity",
    describe:
      "Impressionism at its finest, showcasing countryside birds, architectural elegance, and the serene beauty of a riverside landscape.",
    artStyle: "Impressionism",
    tags: ["countryside", "birds", "architecture", "river"],
  },
  {
    title: "Sculpture: People, Water, and Riverside Tranquility",
    describe:
      "A sculptural masterpiece depicting people, water, and the tranquil ambiance of riverside living.",
    artStyle: "Sculpture",
    tags: ["people", "water", "river"],
  },
  {
    title: "Post-Impressionism: Cooking Storm, Fashion, and Mountain Views",
    describe:
      "Post-Impressionism captured in the midst of a cooking storm, featuring fashion and breathtaking mountain vistas.",
    artStyle: "Post-Impressionism",
    tags: ["cooking", "storm", "fashion", "mountains"],
  },
  {
    title:
      "Nature Photography: Summer Beverages, Animals, Architecture, and Riverside Charm",
    describe:
      "Nature Photography that brings together the refreshing essence of summer beverages, animals, architectural marvels, and the charm of riverside living.",
    artStyle: "Nature Photography",
    tags: ["summer", "beverages", "animals", "architecture", "river"],
  },
  {
    title: "Graffiti: Tea, Summer Vibes, and More Summer",
    describe:
      "A Graffiti masterpiece capturing the essence of tea and the vibrant summer vibes, emphasizing the beauty of this season.",
    artStyle: "Graffiti",
    tags: ["tea", "summer", "summer"],
  },
  {
    title: "Genre Painting: Colorful Street Photography with Beer",
    describe:
      "Genre Painting that celebrates colorful street photography and the joy of sharing a beer with friends.",
    artStyle: "Genre Painting",
    tags: ["colorful", "street photography", "beer"],
  },
  {
    title: "Art Nouveau: Team Sports, Abstract, Vintage, and Gourmet Delights",
    describe:
      "Art Nouveau comes to life with team sports, abstract elements, vintage aesthetics, and an appreciation for gourmet delights.",
    artStyle: "Art Nouveau",
    tags: ["team sports", "abstract", "vintage", "gourmet"],
  },
  {
    title:
      "Kinetic Art: Candid Starry Night, Abstract Landmarks, and Sporting Excellence",
    describe:
      "Kinetic Art that captures candid moments under a starry night sky, featuring abstract landmarks and sporting excellence.",
    artStyle: "Kinetic Art",
    tags: ["candid", "starry night", "abstract", "landmarks", "sports"],
  },
  {
    title: "Street Art: Sunrise Coffee by the Water and Urban Dreams",
    describe:
      "Street Art showcasing the magic of sunrise, a cup of coffee by the water, and the essence of urban dreams.",
    artStyle: "Street Art",
    tags: ["sunrise", "coffee", "sunrise", "water", "urban"],
  },
  {
    title: "Abstract Photography: Friends, Macro Magic, and the Cityscape",
    describe:
      "Abstract Photography that explores the bonds of friendship, magnifies macro details, and embraces the urban cityscape.",
    artStyle: "Abstract Photography",
    tags: ["friends", "macro", "cityscape"],
  },
  {
    title: "Surrealism: Architectural Portrait Shrouded in Clouds and Haze",
    describe:
      "A Surrealist composition where architecture meets portrait, shrouded in the mystique of clouds and haze.",
    artStyle: "Surrealism",
    tags: ["architecture", "portrait", "clouds", "haze"],
  },
  {
    title: "War Art: Water, Pets, and Cocktail Conflicts",
    describe:
      "A War Art representation with water, pets, and the conflicts of cocktails as its central theme.",
    artStyle: "War Art",
    tags: ["water", "pets", "cocktails"],
  },
  {
    title: "Nature Photography: Beer, Spring Fashion, and Serenity",
    describe:
      "Nature Photography capturing the spirit of beer, the bloom of spring fashion, and the serenity of nature.",
    artStyle: "Nature Photography",
    tags: ["beer", "spring", "fashion", "nature"],
  },
  {
    title: "Abstract Expressionism: Team Sports, Graffiti, and Vintage",
    describe:
      "Abstract Expressionism that incorporates team sports, the boldness of graffiti, and a nod to vintage aesthetics.",
    artStyle: "Abstract Expressionism",
    tags: ["team sports", "graffiti", "vintage"],
  },
  {
    title: "Contemporary: Moonlight, Pets, and the Riverside",
    describe:
      "Contemporary artistry depicting moonlit moments, cherished pets, and the tranquility of riverside living.",
    artStyle: "Contemporary",
    tags: ["moonlight", "pets", "river"],
  },
  {
    title: "Sculpture: Coffee, Winter Landscapes, and Family Bonding",
    describe:
      "A sculptural masterpiece featuring coffee, winter landscapes, and heartwarming family bonding moments.",
    artStyle: "Sculpture",
    tags: ["coffee", "winter", "landscape", "family"],
  },
  {
    title: "Graffiti: Beer, Sports, and Vibrant City Life",
    describe:
      "Graffiti-style art that celebrates beer, sports, and the vibrancy of city life.",
    artStyle: "Graffiti",
    tags: ["beer", "sports", "city life"],
  },
  {
    title: "Cubism: Nature, Water, and Architectural Magic",
    describe:
      "A Cubist masterpiece that dissects nature, water, and architectural beauty in a unique and abstract manner.",
    artStyle: "Cubism",
    tags: ["nature", "water", "architecture", "abstract"],
  },
  {
    title: "Pop Art: Birds, Beer, and Modern Living",
    describe:
      "Pop Art that celebrates the presence of birds, beer, and the essence of modern living.",
    artStyle: "Pop Art",
    tags: ["birds", "beer", "modern"],
  },
  {
    title: "Impressionism: Pets, Travel, and Romantic Sunsets",
    describe:
      "Impressionism that captures the essence of pets, the excitement of travel, and the romance of sunsets.",
    artStyle: "Impressionism",
    tags: ["pets", "travel", "romantic", "sunsets"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning", "serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern", "cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside", "dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside calm"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside calm"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside calm"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside calm"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside calm"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside calm"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside calm"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside calm"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
  {
    title: "Romanticism: Sunsets, Pets, and Riverside Dreams",
    describe:
      "Romanticism that celebrates the beauty of sunsets, the companionship of pets, and the dreams that flow by the riverside.",
    artStyle: "Romanticism",
    tags: ["sunsets", "pets", "riverside dreams"],
  },
  {
    title: "Conceptual Art: Birds, Architecture, and Morning Light",
    describe:
      "Conceptual Art that incorporates the grace of birds, architectural marvels, and the gentle embrace of morning light.",
    artStyle: "Conceptual Art",
    tags: ["birds", "architecture", "morning light"],
  },
  {
    title: "Art Nouveau: Wildlife, Street Food, and Spring Blossoms",
    describe:
      "Art Nouveau that embraces the wonder of wildlife, the delight of street food, and the bloom of spring blossoms.",
    artStyle: "Art Nouveau",
    tags: ["wildlife", "street food", "spring blossoms"],
  },
  {
    title:
      "Abstract Photography: Vintage Cars, Urban Scenes, and Lively Colors",
    describe:
      "Abstract Photography that features vintage cars, vibrant urban scenes, and a burst of lively colors.",
    artStyle: "Abstract Photography",
    tags: ["vintage cars", "urban scenes", "lively colors"],
  },
  {
    title: "Sculpture: Architecture, Moonlight, and Family Bonds",
    describe:
      "Sculpture that captures the essence of architectural beauty, the serenity of moonlight, and the strength of family bonds.",
    artStyle: "Sculpture",
    tags: ["architecture", "moonlight", "family bonds"],
  },
  {
    title: "Pop Art: Birds, Fashion, and Vibrant Urban Life",
    describe:
      "Pop Art that celebrates the presence of birds, the world of fashion, and the vibrancy of urban living.",
    artStyle: "Pop Art",
    tags: ["birds", "fashion", "urban life"],
  },
  {
    title: "Impressionism: Pets, Rainy Days, and Riverside Calm",
    describe:
      "Impressionism that captures the charm of pets, the tranquility of rainy days, and the calm of riverside living.",
    artStyle: "Impressionism",
    tags: ["pets", "rainy days", "riverside calm"],
  },
  {
    title: "Conceptual Art: Sunset, Tea, and City Dreams",
    describe:
      "Conceptual Art that blends the beauty of sunsets, the comfort of tea, and the dreams of city life.",
    artStyle: "Conceptual Art",
    tags: ["sunset", "tea", "city dreams"],
  },
  {
    title: "Street Art: Birds, Street Food, and the Essence of Travel",
    describe:
      "Street Art that incorporates birds, street food, and the adventurous spirit of travel.",
    artStyle: "Street Art",
    tags: ["birds", "street food", "travel"],
  },
  {
    title: "Graffiti: Fashion, Sports, and Vibrant Colors",
    describe:
      "Graffiti-style art that dives into the world of fashion, sports, and a burst of vibrant colors.",
    artStyle: "Graffiti",
    tags: ["fashion", "sports", "vibrant colors"],
  },
  {
    title: "Realism Portrait: Sunsets, Wine, and Modernity",
    describe:
      "A Realism portrait that features the beauty of sunsets, the allure of wine, and the essence of modernity.",
    artStyle: "Realism",
    tags: ["portrait", "sunsets", "wine", "modernity"],
  },
  {
    title: "Surrealism: Street Photography, Water, and Mysterious Vibes",
    describe:
      "Surrealism at its finest, incorporating street photography, water, and an aura of mystery.",
    artStyle: "Surrealism",
    tags: ["street photography", "water", "mystery"],
  },
  {
    title:
      "Installation Art: Birds, Architectural Wonders, and Morning Serenity",
    describe:
      "Installation Art that showcases birds, architectural marvels, and the tranquil serenity of morning moments.",
    artStyle: "Installation Art",
    tags: ["birds", "architecture", "morning serenity"],
  },
  {
    title: "Abstract Expressionism: Coffee, Travel, and Cosmic Wonders",
    describe:
      "Abstract Expressionism that delves into the world of coffee, the thrill of travel, and the marvels of the cosmos.",
    artStyle: "Abstract Expressionism",
    tags: ["coffee", "travel", "cosmic wonders"],
  },
  {
    title: "Gothic: Family Moments, Birds, and Rainy Nights",
    describe:
      "Gothic artistry that captures the warmth of family moments, the grace of birds, and the ambiance of rainy nights.",
    artStyle: "Gothic",
    tags: ["family moments", "birds", "rainy nights"],
  },
  {
    title: "Landscape: Moonlight, Architecture, and Modern Cityscapes",
    describe:
      "A landscape masterpiece portraying the enchantment of moonlight, architectural wonders, and the allure of modern cityscapes.",
    artStyle: "Landscape",
    tags: ["moonlight", "architecture", "modern cityscapes"],
  },
];
