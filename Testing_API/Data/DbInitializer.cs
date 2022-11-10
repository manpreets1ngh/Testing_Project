using Testing_API.Entities;

namespace Testing_API.Data
{
    public static class DbInitializer
    {
        public static void Initialzie(StoreContext context)
        {
            if(context.Products.Any()) return;
            var products = new List<Product>
            {
                new Product()
                {
                    ProductName="Echo Dot (4th generation) | Smart speaker with Alexa | Charcoal",
                    Description="Meet Echo Dot—our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound.Voice control your entertainment—stream songs from Amazon Music, Apple Music, Spotify, Deezer and more. Play music, audiobooks and podcasts throughout your home with multi-room music.",
                    Price=27.99F,
                    PictureUrl="/images/echo.jpg",
                    ProductBrand="Amazon",
                    ProductType="Electronics",
                    QuantityInStock=10
                },
                new Product()
                {
                    ProductName="Fire TV Stick 4K with Alexa Voice Remote (includes TV controls)",
                    Description="Cinematic experience: watch in vibrant 4K Ultra HD with support for Dolby Vision, HDR and HDR10+.Home cinema audio with Dolby Atmos: feel scenes come to life with support for immersive Dolby Atmos audio on selected content with compatible home audio systems.",
                    Price=49.99F,
                    PictureUrl="/images/TvStick.jpg",
                    ProductBrand="Amazon",
                    ProductType="Electronics",
                    QuantityInStock=10
                },
                new Product()
                {
                    ProductName="Fire TV Cube | Hands free with Alexa, 4K Ultra HD streaming media player",
                    Description="The most powerful Fire TV streaming media player: the ultra-powerful hexa-core processor delivers a fast, fluid 4K streaming experience. Hands-free entertainment: put down the remote and dive right into your favourites with just your voice. Control the TV with your voice: control your compatible soundbar and A/V receiver; change satellite channels with your voice.",
                    Price=109.99F,
                    PictureUrl="/images/TVcube.jpg",
                    ProductBrand="Amazon",
                    ProductType="Electronics",
                    QuantityInStock=10
                },
                new Product()
                {
                    ProductName="Fast Wireless Charger Thin Aviation Aluminum Technology Fast Charging Pad Compatible with iPhone 13/12/SE /11/XS Max/XR/X/8 Plus Samsung Galaxy S21 S20 S10 Qi-Certified",
                    Description="[3 CHARGING MODES AVAILABLE FOR DIFFERENT PHONES]: 7.5W charging mode is compatible with iPhone 13/13 Pro/13 Mini/13 Pro Max/12/SE 2020/11/XS/XR/X/8 with latest iOS System; 10W charging mode is compatible with S21/S20/Note 10/10 Plus/S10/S10 Plus/S10E/Note9/S9/S8 and so on; 5W charging mode works on Any Qi-enabled devices like Google Pixel 3/3XL/4XL and other Qi-enabled phones. Note: Adapter is Not Included, QC 2.0/3.0 adapter will be highly recommended.",
                    Price=10.99F,
                    PictureUrl="/images/charging.jpg",
                    ProductBrand="Koksi",
                    ProductType="Electronics",
                    QuantityInStock=10
                },
                new Product()
                {
                    ProductName="Samsung Q600A Soundbar Speaker With Subwoofer (2021) - Cinematic Dolby Atmos Surround Soundbar With Adaptive Sound, True 3.1.2 Sound, Q-Symphony TV Pairing & Acoustic Beam Tech For Home Entertainment",
                    Description="Cinematic Living With The Q600A Soundbar – with a powerful subwoofer for a greater bass range, and offering 5 channels of surround sound, our Q600A Soundbar for tv delivers entertainment excellence along with limitless connectivity and Dolby Atmos. Be Part Of The Action With Acoustic Beam - Samsung Acoustic Beam technology mixes & delivers sound, so it appears to come from precisely where the action is happening on the screen when paired with a TV, making for realistic film and gaming moments.",
                    Price=299.99F,
                    PictureUrl="/images/soundbar.jpg",
                    ProductBrand="Samsung",
                    ProductType="Electronics",
                    QuantityInStock=10
                },
            };

            foreach(var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}