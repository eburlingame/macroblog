export type FeaturePhotoRow = FeaturedPhoto | FeaturedPhoto[]

export type FeaturedPhoto = {
  date: string
  src: string
  caption?: string
}

const photos: FeaturePhotoRow[] = [
  {
    date: 'Tuesday, June 25, 2024',
    src: 'd78d20d32b054ed0af3e0abfed85a03d_large.webp',
    caption: "Busy street in Osaka's Dotonbori district.",
  },
  {
    date: 'Friday, June 21, 2024',
    src: '89936d6988e74e67b70eb4896a6a97ea_large.webp',
    caption: 'Sunset on Tumon Bay, Guam.',
  },
  {
    date: 'Wednesday, June 19, 2024',
    src: '4ba194e06488409983949dd9a7217cb8_large.webp',
    caption: 'A storm brewing off the west cost of Guam, seen from the Emerald Valley in Agana.',
  },
  {
    date: 'Wednesday, June 19, 2024',
    src: '563e93208ff7428cb265d5c1977e037b_large.webp',
    caption: "Looking south towards Coco's Island.",
  },
  {
    date: 'Sunday, April 28, 2024',
    src: '003ee7fcd9b14e99b1657ae878a47e11_large.webp',
    caption: 'Flower fields in Carlsbad, CA.',
  },
  {
    date: 'Thursday, November 16, 2023',
    src: '124d4dfde7bf404a900a6b205e83b38a_large.webp',
    caption: 'Hedgestones at Rock of Cashel in County Tipperary, Ireland.',
  },
  {
    date: 'Wednesday, November 15, 2023',
    src: '41e64571eb6b401cabcc0791b4990d96_large.webp',
    caption: 'Cliffs of Moher in County Clare, Ireland.',
  },
  {
    date: 'Tuesday, November 14, 2023',
    src: 'f0ee0c6339a042aa83964e25a7d09b7d_large.webp',
    caption: 'Connemara National Park, County Galway, Ireland.',
  },
  {
    date: 'Tuesday, November 14, 2023',
    src: '400199c2d76840aba83fe5e40cc68292_large.webp',
    caption: 'Looking north west over the Atlantic from the Lower Sky Road.',
  },
  {
    date: 'Saturday, March 25, 2023',
    src: '175f26c6ee7e4c5092ee60f3bd8d34cf_large.webp',
    caption: 'Looking over the Amstel River in Amsterdam, Netherlands.',
  },
  {
    date: 'Tuesday, January  3, 2023',
    src: 'd2b84b6c0cbb473cba0034ea722c89db_large.webp',
    caption: 'Prospect Park at sunset.',
  },
  {
    date: 'Sunday, January  1, 2023',
    src: '050e07f0624f44ee8cfd77fadda733fe_large.webp',
    caption: 'Brooklyn Bridge at night.',
  },
  {
    date: 'Friday, September 16, 2022',
    src: '981fdd5001e744b3b82ed64fd9f8bdcc_large.webp',
    caption: 'A stormy southern tip of Guam',
  },
  {
    date: 'Thursday, September 15, 2022',
    src: 'b42a3a52e78646b8923d55f6aef57620_large.webp',
    caption: 'Looking over tidepools on the eastern shore of Guam.',
  },
  {
    date: 'Tuesday, August  9, 2022',
    src: '590a5e0e4fc3407ab656fac2b56961a0_large.webp',
    caption: 'Dramatic sunset over Portland, OR.',
  },
  {
    date: 'Tuesday, July 12, 2022',
    src: '8dea5ab223424618b08bce76c95daab0_large.webp',
    caption: 'Mt. Hood at sunset, as seen from Rocky Butte.',
  },
  {
    date: 'Thursday, April  7, 2022',
    src: 'ef12ac136ee54145bd07cd0e6a1a952c_large.webp',
    caption: 'Douglas fir near Gold Beach, OR.',
  },
  {
    date: 'Monday, April  4, 2022',
    src: 'd1a426c884ad461e84351bdbfcd22618_large.webp',
    caption: 'Sunset at Gold Beach, OR.',
  },
  {
    date: 'Sunday, April  3, 2022',
    src: '035daaea4713402eb2ed44bbb0512f16_large.webp',
    caption: 'Sea creatures on the Oregon Coast.',
  },
  {
    date: 'Friday, January  7, 2022',
    src: '616b3848e4084356862015fe2a0a85bd_large.webp',
    caption: 'The Grand Tetons in the snow.',
  },
  {
    date: 'Wednesday, December  1, 2021',
    src: 'a809cdff19ef480596519fa216a2f0e1_large.webp',
    caption: 'Preparing for takeoff in the Piper Cherokee 140.',
  },
  {
    date: 'Sunday, November 21, 2021',
    src: 'db21bbc2ac5c4b529dc8d950a08a769f_large.webp',
    caption: 'Biking up a car-free Cornell Rd, Portland, OR.',
  },
  {
    date: 'Friday, July 30, 2021',
    src: 'f8e43ce4d0d04067baeef3bb65af410f_large.webp',
    caption: 'Multnomah Falls in the summer.',
  },
  {
    date: 'Monday, July 26, 2021',
    src: '75b6823bbdfe4de58766112f6811100b_large.webp',
    caption: 'Inverted acrobatics at the Oshkosh Airshow.',
  },
  {
    date: 'Sunday, April  4, 2021',
    src: '7ce4bc560fa94ecda2f0e76b6b0ddf33_large.webp',
    caption: 'Smith Rock State Park, Oregon.',
  },
  {
    date: 'Saturday, March 13, 2021',
    src: 'f4fc5cdabf6c42d6bd81e4226c035514_large.webp',
    caption: 'Lake Chelan, WA.',
  },
  {
    date: 'Thursday, September 24, 2020',
    src: '0ad0f7120b184f6e8f34d94a81de4c00_large.webp',
    caption: 'Mesa Arch at sunrise, Canyonlands National Park.',
  },
  {
    date: 'Tuesday, September 22, 2020',
    src: 'da949c441c764ef7874e5704d1ef8138_large.webp',
    caption: 'Delicate Arch at dusk, Arches National Park.',
  },
  {
    date: 'Thursday, September  3, 2020',
    src: '0917d2f4ddc1415e8991185683a67f2f_large.webp',
    caption: 'Panel of a Cessna 172, enroute to Hood River, OR.',
  },
  {
    date: 'Saturday, August 15, 2020',
    src: 'af1328b2d50f4404a6ada0b52cc8e3c3_large.webp',
    caption: 'A busy Trillium Lake near Mt. Hood, OR.',
  },
  {
    date: 'Friday, July 10, 2020',
    src: '96b32b3a7f0f4d0e9542e293a1dfd48f_large.webp',
    caption: 'Salem airport at sunset.',
  },
  {
    date: 'Saturday, November 23, 2019',
    src: 'a488fb00ba844c7ebb40fc8923276ee0_large.webp',
    caption: 'Flying near Mt. Hood from the backseat of a 172.',
  },
  {
    date: 'Wednesday, August  7, 2019',
    src: 'b126710b3a4441c1bdec01ec060c6649_large.webp',
    caption: 'Rainbow Bridge in Tokyo, Japan.',
  },
  {
    date: 'Saturday, July 27, 2019',
    src: '6e894a8d146b46c0a7628af4a05b38de_large.webp',
    caption: 'Rutan Long-EZ in front of distant thunderstorm at Oshkosh.',
  },
  {
    date: 'Saturday, July 27, 2019',
    src: '4dc6afcceb894f73b62cc0c2624737c7_large.webp',
    caption: 'Biplane at sunset at Oshkosh.',
  },
  {
    date: 'Saturday, July 27, 2019',
    src: 'fa4c9f29c4cf49849d95baa7d4a26ae9_large.webp',
    caption: 'Spitfire at Oshkosh.',
  },
  {
    date: 'Saturday, July 27, 2019',
    src: 'a88e54f2b61a473e804b608c656f4c73_large.webp',
    caption: 'Vans RV-8 at Oshkosh.',
  },
  {
    date: 'Thursday, August  9, 2018',
    src: 'ded5ba3b506b4eb3858dc13b49c23bac_large.webp',
    caption: 'Landing at the Seward airport in Seward, Alaska.',
  },
  {
    date: 'Wednesday, August  8, 2018',
    src: '759e7db4d6094fa0bddd551ae61baf22_large.webp',
    caption: 'Kenai Fjords in Seward, Alaska.',
  },
  {
    date: 'Sunday, August  5, 2018',
    src: 'f71cf5212f004a8aad771fdd514eb7c3_large.webp',
    caption: 'Denali National Park, Alaska.',
  },
  {
    date: 'Thursday, August  2, 2018',
    src: 'eb8cad7a9af849afa10b626a9673779e_large.webp',
    caption: 'Blue Angels performing in Seattle.',
  },
  {
    date: 'Friday, July 27, 2018',
    src: '5f73aafdffe042afa434244c8f3d8e36_large.webp',
    caption: 'B-29 flying over Oshkosh',
  },
  {
    date: 'Thursday, July 26, 2018',
    src: '9387fb7c54e442d5adfcbd2a703577d5_large.webp',
    caption: 'Night airshow at Oshkosh',
  },
  {
    date: 'Thursday, July 26, 2018',
    src: '402e7b4f7d344907ac356d0e84de635e_large.webp',
    caption: 'C-17 arriving at Oshkosh',
  },
  {
    date: 'Wednesday, July 25, 2018',
    src: '4db7b9a0ac3b4feb9d2add7050ce368a_large.webp',
    caption: 'C-17 under a thunderstorm at Oshkosh',
  },
  {
    date: 'Wednesday, July 25, 2018',
    src: '45aa513fe2b840d88d7870539659c9fb_large.webp',
    caption: 'MD-11 departing from Oshkosh',
  },
  {
    date: 'Tuesday, July  3, 2018',
    src: 'c1bf028b55ed4470b357fa4719a2ac90_large.webp',
    caption: 'Bangkok at sunset',
  },
  {
    date: 'Monday, July  2, 2018',
    src: '87ddd12e99954a5ab5e8fb42231a72f7_large.webp',
    caption: 'Wet roads in Bangkok after a storm.',
  },
  {
    date: 'Sunday, July  1, 2018',
    src: 'fcfee6fd783146419a0732bbd8d4e422_large.webp',
  },
  {
    date: 'Sunday, July  1, 2018',
    src: 'e4dd1b32d86a44b78d13ba31c308dc16_large.webp',
    caption: "Street in Bangkok's Chinatown.",
  },
  {
    date: 'Saturday, June 30, 2018',
    src: 'd7c9d8b2f69846fd9652e05822621777_large.webp',
    caption: 'Lightning over Bangkok at night.',
  },
  {
    date: 'Sunday, June 24, 2018',
    src: '084cd1159cb84afdbbbffbcb7b440c5e_large.webp',
    caption: "Bilbao's Guggenheim Museum",
  },
  {
    date: 'Sunday, June 24, 2018',
    src: '5b28984c00d34e3e809e68253a97ed7c_large.webp',
    caption: 'Statue in Bilbao',
  },
  {
    date: 'Sunday, June 24, 2018',
    src: '0bded8501e344d45b3c9d470a264144d_large.webp',
    caption: 'Street in Bilbao',
  },
  {
    date: 'Saturday, June 23, 2018',
    src: '9ee4a4770c4c479aa48acb7a796e6491_large.webp',
    caption: 'Westminster Abbey in London',
  },
  {
    date: 'Saturday, June  9, 2018',
    src: '2d4f01b7c8964e65abdc0ec8ece75a96_large.webp',
    caption: 'Sunset in the hills of San Luis Obispo',
  },
  {
    date: 'Saturday, May 26, 2018',
    src: 'b468fdc28e084612ac65701218971fc2_large.webp',
    caption: 'Sunset at the Avenal airport',
  },
  {
    date: 'Saturday, May 26, 2018',
    src: 'c177f0189a954a3aaeb1a398cfdcbe8d_large.webp',
    caption: 'Hills near Avenal, CA',
  },
  {
    date: 'Saturday, May 19, 2018',
    src: '14a3482aa266460c8c8a077c4c7370ce_large.webp',
    caption: 'Goodyear blimp over the central coast of California',
  },
  {
    date: 'Monday, February 19, 2018',
    src: '83ee618d00c84ddc82a0ae6e3b913912_large.webp',
    caption: '757 departing from LAX',
  },
  {
    date: 'Monday, February 19, 2018',
    src: 'f28db644abd04ae188bc4029eeb766a9_large.webp',
    caption: 'Southwest 737 landing at LAX',
  },
  {
    date: 'Thursday, December 14, 2017',
    src: 'e2fafcceaf844ce2a6ae3ea1bdee3264_large.webp',
    caption: 'Crater Lake in the snow.',
  },
  {
    date: 'Saturday, October 14, 2017',
    src: '7ff8752736a74e6283946e04fd97c529_large.webp',
    caption: 'Cessna 150 taking from from the Avenal airport',
  },
  {
    date: 'Sunday, October  1, 2017',
    src: '32f6eebdfcc74e41bf1189a51ae7d4cf_large.webp',
    caption: 'T-6 Texan at a California Airshow',
  },
  {
    date: 'Saturday, September 30, 2017',
    src: '275e2c801d6f469c8fd06ed3bb4ebb85_large.webp',
    caption: 'Bonanza over the San Luis Obispo airport',
  },
  {
    date: 'Saturday, September 30, 2017',
    src: '517915fc801d4628a04d5e846b5cb4e2_large.webp',
    caption: 'Control tower at the San Luis Obispo airport',
  },
  {
    date: 'Saturday, September 16, 2017',
    src: '287e082129c54779b3afe69bd83b5790_large.webp',
    caption: 'Schweizer 2-33 glider taking off from the Avenal gliderport',
  },
  {
    date: 'Thursday, September  7, 2017',
    src: '3a0231cad1ca4804b815dcc10c529f6e_large.webp',
    caption: "Blue water off Hawaii's big island",
  },
  {
    date: 'Tuesday, August 22, 2017',
    src: 'cfb9bd5c4a904ad9a7d0e94916b90a0f_large.webp',
    caption: 'Snoqualmie falls from the air',
  },
  {
    date: 'Thursday, March  9, 2017',
    src: '3e285a3b6fa24764bfdebdaff7d44afc_large.webp',
    caption: 'Green hills of the central coast of California',
  },
  {
    date: 'Saturday, January 28, 2017',
    src: '1c66ba247cc244b682da4d194bd1e3f0_large.webp',
    caption: 'Schweizer 2-33 glider at the Avenal gliderport',
  },
  {
    date: 'Saturday, January 28, 2017',
    src: '1b7d4c05c2a1447995e71c1078fd510b_large.webp',
    caption: 'Panel of a Schweizer 2-33 under tow',
  },
  {
    date: 'Saturday, July  9, 2016',
    src: '3eb14f502989473aa099b1f98276f6b3_large.webp',
    caption: 'Spectators watching the Arlington Fly-In airshow',
  },
  {
    date: 'Sunday, May 29, 2016',
    src: 'c1e4658b43ed4d758013c56bcaa456e0_large.webp',
    caption: 'Sunset over a beach in Pismo, CA',
  },
  {
    date: 'Saturday, August 15, 2015',
    src: 'e7a6d1a3683944b6a6424d684690d6f4_large.webp',
    caption: 'Sunrise on Mt. Adams, WA',
  },
  {
    date: 'Saturday, August 15, 2015',
    src: 'd53ff1e425eb4d3f8a50cf91cdd6b7c3_large.webp',
    caption: 'Snow-covered Mt. Adams',
  },
  {
    date: 'Sunday, May  3, 2015',
    src: '3c2680c72a3e438893807eb4bfa54d05_large.webp',
    caption: 'Sunset at Montaña de Oro State Park',
  },
  {
    date: 'Saturday, December 13, 2014',
    src: '357f730e70e54c25807d8573e11ab554_large.webp',
    caption: 'Dramatic sky over an U.S. Airways A320 in Phoenix',
  },
  {
    date: 'Saturday, November 22, 2014',
    src: '19134022f7f344a59c27bcf120f78bb6_large.webp',
    caption: 'Mission in Santa Barbara, CA',
  },
  {
    date: 'Saturday, October 11, 2014',
    src: '13004c8d16fb45c1a3663b893df257e0_large.webp',
    caption: 'Sunrise from Bishop Peak, San Luis Obispo, CA',
  },
  {
    date: 'Tuesday, September  9, 2014',
    src: '6bf3532efcde4710a2b1564e61cb1a7b_large.webp',
    caption: 'Lining up to land in Friday Harbor, WA',
  },
  {
    date: 'Wednesday, July  3, 2013',
    src: 'f53b288fe7d04317964bd33cd6a6b2b4_large.webp',
    caption: 'Port on the island of Capri, Italy',
  },
  {
    date: 'Tuesday, July  2, 2013',
    src: 'c74796bc3b424152a4bffb739ed1af3c_large.webp',
    caption: 'Sunset in Sorrento, Italy',
  },
  {
    date: 'Saturday, June 29, 2013',
    src: 'b6751f480aff49969c67e8b09fedcc30_large.webp',
    caption: 'Flowers in Sorrento, Italy',
  },
]

export default photos
