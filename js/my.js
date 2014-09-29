// Create the tooltips only when document ready
 $(document).ready(function()
 {
    console.log("doc ready");
    
    
     // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
     $('.ajax').each(function() {
         $(this).qtip({
            content: {
                text: function(event, api) {
                    $.ajax({
                        url: api.elements.target.attr('a') // Use href attribute as URL
                    })
                    .then(function(content) {
                        // Set the tooltip content upon successful retrieval
                        api.set('content.text', content);
                    }, function(xhr, status, error) {
                        // Upon failure... set the tooltip content to error
                        api.set('content.text', status + ': ' + error);
                    });
        
                    return 'Loading...'; // Set some initial text
                }
            },
            
            hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow salmon'
         });
     });

     $('.trailmix').qtip({
    content: {
        text: 'The word G.O.R.P., a term for trail mix often used by hikers. No one knows for sure what it stands for but some prevailing theories are: "good old raisins and peanuts", "granola, oats, raisins, and peanuts", or "grapes, oranges, raisins and peanuts" or "gobs of raw protein". Regardless what you call it, you will be hard pressed to find a hiker without their own \"brand\" of the stuff.</br></br><a href= "http://www.backpacker.com/news-and-events/news/trail-news/trail-chef-three-gotta-try-em-gorp-recipes/" target="blank"><h5>Check out some of these G.O.R.P recipes.</h5></a>',
        title: '<h3 style="text-align: right;">G.O.R.P</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
     
     $('.jerky').qtip({
    content: {
        text: 'Jerky is lean meat that has been trimmed of fat, cut into strips, and then dried to prevent spoilage. Normally, this drying includes the addition of salt, to prevent bacteria from developing on the meat before sufficient moisture has been removed. The word "jerky" derived from the Quechua word ch\'arki which means "dried, salted meat". All that is needed to produce basic "jerky" is a low-temperature drying method, and salt to inhibit bacterial growth.</br></br><a href= "http://www.livestrong.com/article/384029-health-facts-on-beef-jerky/" target="blank">Here are some health facts you may not know about jerky.</a>',
        title: '<h3 style="text-align: right;">Jerky</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
     
     $('.mtnhouse').qtip({
    content: {
        text: 'Whether dehydrated or freeze dried, the concept is the same. Remove the moisture & increase the shelf life. Depending on the type of food the shelf life can range from 15-30 years if stored properly. This process also reduces the size & weight of the food making it a great option for the trail. While store bought meals offer great selections, DIY dehydrated meals can offer more control over flavor & ingredients. This can be especially important to indivduals with dietary restrictions.</br></br><a href= "http://www.livestrong.com/article/410575-is-freeze-dried-food-healthy/" target="blank">Is Freeze-Dried Food Healthy? Find out more here.</a>',
        title: '<h3 style="text-align: right;">Freeze Dried</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
     
$('.salmon').qtip({
    content: {
        text: '<img style="float-left" class="tip-image" src="../images/salmon.png">At the end of a long day on the trail no one wants to spend a lot of time preparing a meal but the thought of eating another granola bar may just send you over the edge. Fear not! Try this delicious recipe out on your next backcountry excursion and you\'re sure to be a hit around camp!<a href= "salmon.html" target="blank"></br></br><h5 style="margin-top: -50px; float: left;">Get the full recipe here</h5></a>',
        title: '<h2 style="font-size: 17px;">Fireside Poached Salmon and Shrimp Scampi Over Pasta</h2>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
          
     $('#view').qtip({
    content: {
        text: 'This little seen angle of the <a href= "http://en.wikipedia.org/wiki/New_River_\(Kanawha_River)\" target="blank">New River Gorge Bridge</a>, the world\'s fourth longest single arch bridge, is less than a two mile hike. Don\'t look for it on a map though. The trail is a local secret! The bridge spans 3,030 feet and towers 876 feet above the <a href= "http://www.nps.gov/neri/planyourvisit/nrgbridge.htm" target="blank">New River</a>. The New River is one of the oldest rivers in the world and one of only a handful that flow South to North. Every year more than 400 BASE jumpers leap from the brigde in front of a crowd of around 200,000 spectators during the annual <a href= "http://officialbridgeday.com/" target="blank">Bridge Day Event.</a>',
        title: '<h3 style="text-align: right;">What A View</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
     
     $('#q1').qtip({
    content: {
        text: 'If your hike is three nights or less, consider freezing perishable ingredients or parts of your meals and packing them in a soft collapsible cooler. Just remember to limit opening the cooler. The ice you pack in is all you have!',
        title: '<h3 style="text-align: right;">Freeze It!</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
      
     $('#q2').qtip({
    content: {
        text: 'In some areas open fires are forbidden. Check for restrictions before you get there. Most state parks provide fire rings with cooking surfaces. However, they usually forbid gathering loose firewood and require you to purchase wood from them. For a short hike this may work, but that 10lb stack of wood will feel like an anvil after less than a mile.',
        title: '<h3 style="text-align: right;">Fire?</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
     
     $('#q3').qtip({
    content: {
        text: 'Whether you are drinking it, cooking with it or washing up your dishes, access to clean water is a must. Most state parks provide potable water. Always verify this before arriving. It is advisable to pack in some type of water treatment as a precaution.</br></br><a href= "http://www.backpacker.com/survival/which-water-treatment-is-for-you/" target="blank">Here is some more information on how to select a water treatment method.</a>',
        title: '<h3 style="text-align: right;">Water</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
                             
     $('#breakfast').qtip({
    content: {
        text: 'Pack in frozen, uncooked cinnamon rolls for a tasty breakfast alternative. Put a few drops of oil on a preheated pan & fry away. Cover with a lid or some aluminum foil to simulate an oven. Flip them over when one side is crispy & repeat.<a href= "cinnamon-rolls.html" target="blank"><img class="tip-image" src="../images/scratch-cinnamon-roll.png"></br></br>If you really want to kick it up a notch, toss the store-bought tube and try this recipe for homeade cinnamon rolls!</a>',
        title: '<h3>Fried Cinnamon Rolls</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
     
     $('#lunch').qtip({
    content: {
        text: 'Quick and easy is the name of the game! Prep this dish at home and meal time is a snap.</br></br>At home combine:<ul><li>8oz Cream Cheese</><li>4oz Sharp Cheddar Cheese</li><li>4oz Cohita Cheese</li><li>1/4 Cup Heavy Whipping Cream</li></ul>Simmer over medium heat stirring regularly until everything is melted. Add more cream if necessary to reach the desired consistency.</br>Let everything cool. Put the fondue in a zip-top and store it in the refrigerator until you are ready for the trail. Don\'t freeze it! Cheese breaks down when frozen and you WILL NOT like the result! If you pack it in a cooler with your other frozen goods, it will keep the length of your trip.</br>When it\'s time to dig in just simmer the bag in some hot water for about 10 minutes. Kneed the contents in the bag and return to the simmering water if necessary to soften to a dippable consistency. Serve with your favorite veggies, crackers or chips. Use the zip-top bag as a serving dish and cleanup becomes a sinch. <a href="fondue.html" target="blank"><h5>View this recipe full screen here</h5><a/>',
        title: '<h2 style="font-size: 20px">Trailside Three Cheese Fondue</h2>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
     
     $('#dinner').qtip({
    content: {
        text: 'This super simple dish will put 5-stars on any campsite!</br>In the center of a 2\'X2\' square of aluminum foil combine the following:<ul><li>1 pound of frozen pre-cooked shrimp</><li>4oz unsalted butter</li><li>4 cloves of garlic peeled & smashed</li><li>2 Tbsp of your favorite Italian seasoning</li></ul>Bring 2 sides of the foil together and roll them together to about 2\" above the shrimp. Roll each of the other sides toward the center to about 2\" from the shrimp. You want to leave this 2\' space around the shrimp so it can steam in the foil pouch. Place the pouch over hot coals for about 20 minutes. Make sure the pouch is not over direct flame or it will cook too fast and burn. Remember, the shrimp are already cooked. All you are doing is thawing the shrimp and melting the butter. When the shrimp are warmed through, dig in!<a href= "salmon.html" target="blank"><img class="tip-image" src="../images/salmon.png"></br></br>For an extra special dinner combine these shrimp with this poached salmon and pasta dish.</a>',
        title: '<h2 style="font-size: 20px">Fireside Shrimp Scampi</h2>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
     
     $('#dessert').qtip({
    content: {
        text: 'This delicious cheesecake was whipped up in a matter of minutes and devoured just as quick! With only 4 ingredients & a packweight of less that a pound it would be a crime to deny yourself something so delicious at the end of a long day. Or whenever the urge hits you! <a href= "cheesecake.html" target="blank">Click here for the recipe.</a>',
        title: '<h3 style="text-align: right;">S\'More No More</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });
     
     $('#utensils').qtip({
    content: {
        text: 'A set of long tongs & 1 or 2 flexible spatulas are super handy. Tongs are great for moving things around on the fire and spatulas can be used to mix, serve or flip.',
        title: '<h3 style="text-align: right;">Cooking Utensils</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });

     
     $('#foil').qtip({
    content: {
        text: 'Foil is great for wrapping up leftovers but even better for crafting cookware in the field. Foil can be crafted into pouches to steam or poach food or wrapped around other cookware to create an oven effect. The uses for foil in the field are endless. It\'s a good idea to pack heavy duty foil. Anything less won\'t stand up to the abuse.',
        title: '<h3 style="text-align: right;">Aluminum Foil</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });

     
     $('#stove').qtip({
    content: {
        text: 'Even in areas that allow camp fires it\'s a good idea to pack a portable stove. Cooking over a fire is wonderful and can impart great flavor. But when you first wake up and just need to boil some water for a quick cup of coffee, starting a fire can be quite a hassle. Not to metion how difficult it can be to start a fire after a rain. Always have a plan "B".',
        title: '<h3 style="text-align: right;">Portable Stove</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });

     
     $('#cups').qtip({
    content: {
        text: 'Having a cup may sound like a given. But it\'s the little things like this that often get overlooked. Cups aren\'t just for drinking! A rugged lightweight cup can double as a bowl, a scoop or a measuring cup.',
        title: '<h3 style="text-align: right;">Drinking Cups</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });

     
     $('#wipes').qtip({
    content: {
        text: 'Sanitation should always be top of mind. This is even more important in the field. Nothing ruins a camping trip quicker than an upset stomach. Disposable wipes are one of the easiest ways to prevent contamination. They are cheap and lightweight. They can be used on your hands or when combined with a little boiling water double as washcloths to clean dishes.',
        title: '<h3 style="text-align: right;">Cleanup</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });

     
     $('#plates').qtip({
    content: {
        text: 'A rugged lightweight plate and bowl are essential in the field. Great for eating on but can double as prep stations for meals.',
        title: '<h3 style="text-align: right;">Dinnerware</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });

     
     $('#pot').qtip({
    content: {
        text: 'A cook pot is critical for any outdoor kitchen. Having a way to boil water is one of the most important things to have. IN addition to boiling water the pot can be used to simmer soups cook pasta or carry water. It\'s a good idea to have a pot with a capacity of 1/2 quart per person. When selecting any camp kitchen cookware look for lightweight materials like alluminum or titanium and look for items that nest in themselves.',
        title: '<h3 style="text-align: right;">Cooking Pot</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });

     
     $('#pans').qtip({
    content: {
        text: 'Having at least one pan with a lid is essential. This will cover most meals. Having a second one will make things a lot easier. When selecting any camp kitchen cookware look for lightweight materials like alluminum or titanium and look for items that nest in themselves.',
        title: '<h3 style="text-align: right;">Pans & Baking Dishes</h3>'
    },
    
    hide: {
               fixed: true,
               delay: 300
            },
            position: {
               target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             }  
         },
            style: 'qtip-light qtip-rounded qtip-shadow'
      });


var quiz = jQuery('#quiz_container').quiz('0Avz1mWW_m8JUdFZxZWc5TmNPcVIybXVOVWhxenNZMWc'); //your published spreadsheet key or URL goes here
      
});