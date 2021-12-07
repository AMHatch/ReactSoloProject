import { v4 as uuidv4 } from 'uuid';

let products = [
//WORK BOOTS

    //Builder Pro**********************
    {
    id:uuidv4(),
    title: 'BuilderPro',
    image:"/images/builder_pro_black_ft_moderate_arch_pair_side.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Are you on your feet 8-12 hours a day? The BuilderPro(TM) was designed with you in mind. If you are a tradesmen, mechanic, warehouse worker, construction worker, logger, or you’re doing anything else where you’re on your feet all day. This is your boot. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the BuilderPro for serious work."

},
{
    id:uuidv4(),
    title: 'BuilderPro',
    image:"/images/builder_pro_walnut_ft_moderate_arch_pair_side.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"Walnut",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Are you on your feet 8-12 hours a day? The BuilderPro(TM) was designed with you in mind. If you are a tradesmen, mechanic, warehouse worker, construction worker, logger, or you’re doing anything else where you’re on your feet all day. This is your boot. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the BuilderPro for serious work."

},
{
    id:uuidv4(),
    title: 'BuilderPro',
    image:"/images/builderpro_tan_ft_moderate_arch_side.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"Tan",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Are you on your feet 8-12 hours a day? The BuilderPro(TM) was designed with you in mind. If you are a tradesmen, mechanic, warehouse worker, construction worker, logger, or you’re doing anything else where you’re on your feet all day. This is your boot. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the BuilderPro for serious work."

},
{
    id:uuidv4(),
    title: 'BuilderPro',
    image:"/images/builderpro_1964_brown_side.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"1964 Brown",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Are you on your feet 8-12 hours a day? The BuilderPro(TM) was designed with you in mind. If you are a tradesmen, mechanic, warehouse worker, construction worker, logger, or you’re doing anything else where you’re on your feet all day. This is your boot. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the BuilderPro for serious work."

},
{
    id:uuidv4(),
    title: 'BuilderPro',
    image:"/images/builder_pro_black_55_medium_arch_pair_side_2.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Are you on your feet 8-12 hours a day? The BuilderPro(TM) was designed with you in mind. If you are a tradesmen, mechanic, warehouse worker, construction worker, logger, or you’re doing anything else where you’re on your feet all day. This is your boot. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the BuilderPro for serious work."

},
{
    id:uuidv4(),
    title: 'BuilderPro',
    image:"/images/builder_pro_walnut_55_medium_arch_pair_side_1.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"Walnut",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Are you on your feet 8-12 hours a day? The BuilderPro(TM) was designed with you in mind. If you are a tradesmen, mechanic, warehouse worker, construction worker, logger, or you’re doing anything else where you’re on your feet all day. This is your boot. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the BuilderPro for serious work."

},
{
    id:uuidv4(),
    title: 'BuilderPro',
    image:"/images/builder_pro_tan_55_medium_arch_pair_side.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"Tan",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Are you on your feet 8-12 hours a day? The BuilderPro(TM) was designed with you in mind. If you are a tradesmen, mechanic, warehouse worker, construction worker, logger, or you’re doing anything else where you’re on your feet all day. This is your boot. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the BuilderPro for serious work."

},
{
    id:uuidv4(),
    title: 'BuilderPro',
    image:"/images/builderpro_1964_brown_55_last_side.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"1964 Brown",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Are you on your feet 8-12 hours a day? The BuilderPro(TM) was designed with you in mind. If you are a tradesmen, mechanic, warehouse worker, construction worker, logger, or you’re doing anything else where you’re on your feet all day. This is your boot. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the BuilderPro for serious work."

},
//RANGER**************************
{
    id:uuidv4(),
    title: 'Ranger',
    image:"/images/black_ranger.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"work",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 520,
    description: "The Ranger is our workhorse giving you comfort and support all day long for tough, demanding jobs. Perfect for farmers, ranchers, construction workers, and general purpose work."

},
{
    id:uuidv4(),
    title: 'Ranger',
    image:"/images/walnut_ranger.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"work",
    color:"Walnut",
    leather:"Seidel - Maximum Support Work",
    price: 520,
    description: "The Ranger is our workhorse giving you comfort and support all day long for tough, demanding jobs. Perfect for farmers, ranchers, construction workers, and general purpose work."

},
{
    id:uuidv4(),
    title: 'Ranger',
    image:"/images/tan_ranger.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"work",
    color:"Tan",
    leather:"Seidel - Maximum Support Work",
    price: 520,
    description: "The Ranger is our workhorse giving you comfort and support all day long for tough, demanding jobs. Perfect for farmers, ranchers, construction workers, and general purpose work."

},
{
    id:uuidv4(),
    title: 'Ranger',
    image:"/images/ranger_black_55_medium_arch_pair_side_1.jpeg",
    last: 'Classic Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"work",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 520,
    description: "The Ranger is our workhorse giving you comfort and support all day long for tough, demanding jobs. Perfect for farmers, ranchers, construction workers, and general purpose work."

},
{
    id:uuidv4(),
    title: 'Ranger',
    image:"/images/ranger_walnut_55_medium_arch_pair_side_1.jpeg",
    last: 'Classic Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"work",
    color:"Walnut",
    leather:"Seidel - Maximum Support Work",
    price: 520,
    description: "The Ranger is our workhorse giving you comfort and support all day long for tough, demanding jobs. Perfect for farmers, ranchers, construction workers, and general purpose work."

},
{
    id:uuidv4(),
    title: 'Ranger',
    image:"/images/ranger_tan_55_medium_arch_pair_side.jpeg",
    last: 'Classic Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"work",
    color:"Tan",
    leather:"Seidel - Maximum Support Work",
    price: 520,
    description: "The Ranger is our workhorse giving you comfort and support all day long for tough, demanding jobs. Perfect for farmers, ranchers, construction workers, and general purpose work."

},
{
    id:uuidv4(),
    title: 'Ranger',
    image:"/images/ranger_55_1964_brown_side.jpeg",
    last: 'Classic Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"work",
    color:"1964 Brown",
    leather:"Seidel - Maximum Support Work",
    price: 520,
    description: "The Ranger is our workhorse giving you comfort and support all day long for tough, demanding jobs. Perfect for farmers, ranchers, construction workers, and general purpose work."

},
//PACKER************************
{
    id:uuidv4(),
    title: 'Packer',
    image:"/images/packer_black_5332_medium_arch_pair_side.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-Bar",
    type:"work",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Like our Ranger boot, the Packer is our workhorse giving you comfort and support all day long for tough, demanding jobs. "

},
{
    id:uuidv4(),
    title: 'Packer',
    image:"/images/packer_walnut_5332_medium_arch_pair_side.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-Bar",
    type:"work",
    color:"Walnut",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Like our Ranger boot, the Packer is our workhorse giving you comfort and support all day long for tough, demanding jobs. "

},
{
    id:uuidv4(),
    title: 'Packer',
    image:"/images/packer_tan_5332_medium_arch_pair_side.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-Bar",
    type:"work",
    color:"Tan",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Like our Ranger boot, the Packer is our workhorse giving you comfort and support all day long for tough, demanding jobs. "

},
{
    id:uuidv4(),
    title: 'Packer',
    image:"/images/packer_1964_smooth.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-Bar",
    type:"work",
    color:"1964 Brown",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "Like our Ranger boot, the Packer is our workhorse giving you comfort and support all day long for tough, demanding jobs. "

},
//WEDGE WORKER ***********************
{
    id:uuidv4(),
    title: 'Wedge Worker',
    image:"/images/WedgeWorkBlack.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® Crepe 2021",
    type:"work",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 470,
    description: "Are you on your feet 8-12 hours a day? The Wedge Worker was designed with you in mind. If you are a tradesmen, warehouse worker, or carpenter or you’re doing anything else where you’re on your feet all day and can't have a heeled boot, then the Wedge Worker is for you."

},
{
    id:uuidv4(),
    title: 'Wedge Worker',
    image:"/images/WedgeWorkWalnut.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® Crepe 2021",
    type:"work",
    color:"Walnut",
    leather:"Seidel - Maximum Support Work",
    price: 470,
    description: "Are you on your feet 8-12 hours a day? The Wedge Worker was designed with you in mind. If you are a tradesmen, warehouse worker, or carpenter or you’re doing anything else where you’re on your feet all day and can't have a heeled boot, then the Wedge Worker is for you."

},
{
    id:uuidv4(),
    title: 'Wedge Worker',
    image:"/images/WedgeWorkTan.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® Crepe 2021",
    type:"work",
    color:"Tan",
    leather:"Seidel - Maximum Support Work",
    price: 470,
    description: "Are you on your feet 8-12 hours a day? The Wedge Worker was designed with you in mind. If you are a tradesmen, warehouse worker, or carpenter or you’re doing anything else where you’re on your feet all day and can't have a heeled boot, then the Wedge Worker is for you."

},
// TANKER PRO ******************
{
    id:uuidv4(),
    title: 'TankerPro',
    image:"/images/tankerpro-black-1.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 595,
    description: "The TankerPro™ uses the same construction as our BuilderPro™ and Hot Shot® but utilized a classic Tanker Boot strap design for getting in and out of the boots with ease and preventing laces and speed hooks from getting snagged. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the TankerPro™ for serious work. Features: Vibram® lug sole Sole stack-up is 3/4'' to 1'' Legendary arch support for comfort on rugged terrain 7.5 oz to 8 oz leather for greater for durability Full veg tanned leather insole, midsole, and shank construction"
},
{
    id:uuidv4(),
    title: 'TankerPro',
    image:"/images/tankerpro_walnut_vibram_sole_side.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"Walnut",
    leather:"Seidel - Maximum Support Work",
    price: 595,
    description: "The TankerPro™ uses the same construction as our BuilderPro™ and Hot Shot® but utilized a classic Tanker Boot strap design for getting in and out of the boots with ease and preventing laces and speed hooks from getting snagged. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the TankerPro™ for serious work. Features: Vibram® lug sole Sole stack-up is 3/4'' to 1'' Legendary arch support for comfort on rugged terrain 7.5 oz to 8 oz leather for greater for durability Full veg tanned leather insole, midsole, and shank construction"
},
{
    id:uuidv4(),
    title: 'TankerPro',
    image:"/images/tankerpro_1964_medium_brown_honey_vibram_side_1.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"work",
    color:"1964 Brown",
    leather:"Seidel - Maximum Support Work",
    price: 595,
    description: "The TankerPro™ uses the same construction as our BuilderPro™ and Hot Shot® but utilized a classic Tanker Boot strap design for getting in and out of the boots with ease and preventing laces and speed hooks from getting snagged. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the TankerPro™ for serious work. Features: Vibram® lug sole Sole stack-up is 3/4'' to 1'' Legendary arch support for comfort on rugged terrain 7.5 oz to 8 oz leather for greater for durability Full veg tanned leather insole, midsole, and shank construction"
},
//FIRE BOOTS
//HOT SHOT
{
    id:uuidv4(),
    title: 'HotShot®',
    image:"/images/builder_pro_black_ft_moderate_arch_pair_side.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® Red X Fire Lug",
    type:"work",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: "This is our legendary National Fire Protection Agency (NFPA) certified fireboot. Made with burn resistant Vibram® Red-X lug soleand burn resistant stitching throughout the boot construction. This boot is third-party tested for heat, puncture, and slip resistance. "
},
{
    id:uuidv4(),
    title: 'HotShot®',
    image:"/images/builder_pro_walnut_ft_moderate_arch_pair_side.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® Red X Fire Lug",
    type:"work",
    color:"Walnut",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description:"This is our legendary National Fire Protection Agency (NFPA) certified fireboot. Made with burn resistant Vibram® Red-X lug soleand burn resistant stitching throughout the boot construction. This boot is third-party tested for heat, puncture, and slip resistance. " 
},
{
    id:uuidv4(),
    title: 'HotShot®',
    image:"/images/builderpro_tan_ft_moderate_arch_side.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® Red X Fire Lug",
    type:"work",
    color:"Tan",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description:"This is our legendary National Fire Protection Agency (NFPA) certified fireboot. Made with burn resistant Vibram® Red-X lug soleand burn resistant stitching throughout the boot construction. This boot is third-party tested for heat, puncture, and slip resistance. " 
},
{
    id:uuidv4(),
    title: 'HotShot®',
    image:"/images/builderpro_1964_brown_side.jpeg",
    last: 'Moderate Arch',
    height: '10"',
    outsole:"Vibram® Red X Fire Lug",
    type:"work",
    color:"1964 Brown",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description:"This is our legendary National Fire Protection Agency (NFPA) certified fireboot. Made with burn resistant Vibram® Red-X lug soleand burn resistant stitching throughout the boot construction. This boot is third-party tested for heat, puncture, and slip resistance. " 
},
{
    id:uuidv4(),
    title: 'HotShot®',
    image:"/images/builder_pro_black_55_medium_arch_pair_side_2.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® Red X Fire Lug",
    type:"work",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description:"This is our legendary National Fire Protection Agency (NFPA) certified fireboot. Made with burn resistant Vibram® Red-X lug soleand burn resistant stitching throughout the boot construction. This boot is third-party tested for heat, puncture, and slip resistance. " 
},
{
    id:uuidv4(),
    title: 'HotShot®',
    image:"/images/builder_pro_walnut_55_medium_arch_pair_side_1.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® Red X Fire Lug",
    type:"work",
    color:"Walnut",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description:"This is our legendary National Fire Protection Agency (NFPA) certified fireboot. Made with burn resistant Vibram® Red-X lug soleand burn resistant stitching throughout the boot construction. This boot is third-party tested for heat, puncture, and slip resistance. " 
},
{
    id:uuidv4(),
    title: 'HotShot®',
    image:"/images/builder_pro_tan_55_medium_arch_pair_side.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® Red X Fire Lug",
    type:"work",
    color:"Tan",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description:"This is our legendary National Fire Protection Agency (NFPA) certified fireboot. Made with burn resistant Vibram® Red-X lug soleand burn resistant stitching throughout the boot construction. This boot is third-party tested for heat, puncture, and slip resistance. " 
},
{
    id:uuidv4(),
    title: 'HotShot®',
    image:"/images/builderpro_1964_brown_55_last_side.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® Red X Fire Lug",
    type:"work",
    color:"1964 Brown",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description:"This is our legendary National Fire Protection Agency (NFPA) certified fireboot. Made with burn resistant Vibram® Red-X lug soleand burn resistant stitching throughout the boot construction. This boot is third-party tested for heat, puncture, and slip resistance. " 
},
//HERITAGE BOOTS********************
//FALCON
{
    id:uuidv4(),
    title: 'Falcon',
    image:"/images/falcon_black_ft_moderate_arch_pair_side_1.jpeg",
    last: 'Moderate Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Black CXL",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Falcon is the staple casual boot. Built on the HNW Last, the Falcon provides all day comfort with the beauty and durability of premium, USA tanned leather. The Falcon features moderate arch support with a traditional heel height."

},
{
    id:uuidv4(),
    title: 'Falcon',
    image:"/images/falcon_British.jpeg",
    last: 'Moderate Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"British Brown CXL",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Falcon is the staple casual boot. Built on the HNW Last, the Falcon provides all day comfort with the beauty and durability of premium, USA tanned leather. The Falcon features moderate arch support with a traditional heel height."

},
{
    id:uuidv4(),
    title: 'Falcon',
    image:"/images/falcon_brown_waxed_flesh_moderate_arch_low_heel_pair_side.jpeg",
    last: 'Moderate Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Brown Waxed Flesh",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Falcon is the staple casual boot. Built on the HNW Last, the Falcon provides all day comfort with the beauty and durability of premium, USA tanned leather. The Falcon features moderate arch support with a traditional heel height."

},{
    id:uuidv4(),
    title: 'Falcon',
    image:"/images/falcon_color_8_side.jpeg",
    last: 'Moderate Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Color #8 CXL",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Falcon is the staple casual boot. Built on the HNW Last, the Falcon provides all day comfort with the beauty and durability of premium, USA tanned leather. The Falcon features moderate arch support with a traditional heel height."

},{
    id:uuidv4(),
    title: 'Falcon',
    image:"/images/falcon_hnw_1964.jpeg",
    last: 'Moderate Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"1964 Brown",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Falcon is the staple casual boot. Built on the HNW Last, the Falcon provides all day comfort with the beauty and durability of premium, USA tanned leather. The Falcon features moderate arch support with a traditional heel height."

},{
    id:uuidv4(),
    title: 'Falcon',
    image:"/images/falcon_natural_waxed_flesh_moderate_arch_low_heel_pair_side.jpeg",
    last: 'Moderate Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Natural Waxed Flesh",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Falcon is the staple casual boot. Built on the HNW Last, the Falcon provides all day comfort with the beauty and durability of premium, USA tanned leather. The Falcon features moderate arch support with a traditional heel height."

},{
    id:uuidv4(),
    title: 'Falcon',
    image:"/images/falcon_pred_orange_ft_moderate_arch_heritage_boot_side_1.jpeg",
    last: 'Moderate Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Predator Orange",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Falcon is the staple casual boot. Built on the HNW Last, the Falcon provides all day comfort with the beauty and durability of premium, USA tanned leather. The Falcon features moderate arch support with a traditional heel height."

},

// Officer boot
{
    id:uuidv4(),
    title: 'Officer',
    image:"/images/officer_hnw_moderate_arch_predator_orange.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"casual",
    color:"Predator Orange",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Officer Boot is built like a Ranger with the style of classic Military footwear. Featuring an 8 inch boot height, it boasts exceptional ankle support and structure. The upper is designed to sit well under any trousers, allowing the boots to be worn with a wide array of clothing."

},
{
    id:uuidv4(),
    title: 'Officer',
    image:"/images/officer__8_cxl_side_sole.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"casual",
    color:"Color #8 CXL",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Officer Boot is built like a Ranger with the style of classic Military footwear. Featuring an 8 inch boot height, it boasts exceptional ankle support and structure. The upper is designed to sit well under any trousers, allowing the boots to be worn with a wide array of clothing."

},
{
    id:uuidv4(),
    title: 'Officer',
    image:"/images/officer-boot-blk.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"casual",
    color:"Black CXL",
    leather:"Horween Chromexcel",
    price: 539,
    description: "The Officer Boot is built like a Ranger with the style of classic Military footwear. Featuring an 8 inch boot height, it boasts exceptional ankle support and structure. The upper is designed to sit well under any trousers, allowing the boots to be worn with a wide array of clothing."

},
{
    id:uuidv4(),
    title: 'Officer',
    image:"/images/officer-Bridle-VegTan.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"casual",
    color:"Bridle",
    leather:"Wickett & Craig VegTan",
    price: 659,
    description: "The Officer Boot is built like a Ranger with the style of classic Military footwear. Featuring an 8 inch boot height, it boasts exceptional ankle support and structure. The upper is designed to sit well under any trousers, allowing the boots to be worn with a wide array of clothing."

},
{
    id:uuidv4(),
    title: 'Officer',
    image:"/images/officer-milled-harness-VegTan.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® 430 Mini",
    type:"casual",
    color:"Milled Harness",
    leather:"Wickett & Craig VegTan",
    price: 659,
    description: "The Officer Boot is built like a Ranger with the style of classic Military footwear. Featuring an 8 inch boot height, it boasts exceptional ankle support and structure. The upper is designed to sit well under any trousers, allowing the boots to be worn with a wide array of clothing."

},
// ROBERT 
{
    id:uuidv4(),
    title: 'Robert',
    image:"/images/robert_black_55_medium_arch_pair_side.jpeg_1.jpg",
    last: 'Classic Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Black CXL",
    leather:"Horween Chromexcel",
    price: 539,
    description: "Originally made for series workers who wanted a weekend boot, the Robert offers great arch support, paired with premium USA leathers. This boot differs from the Falcon in that it has greater arch support and a higher heel--consistent with the series work boot models which have made Nicks great: the Ranger and the BuilderPro."

},
{
    id:uuidv4(),
    title: 'Robert',
    image:"/images/robert_brown_55_medium_arch_side.jpeg",
    last: 'Classic Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Brown CXL",
    leather:"Horween Chromexcel",
    price: 539,
    description: "Originally made for series workers who wanted a weekend boot, the Robert offers great arch support, paired with premium USA leathers. This boot differs from the Falcon in that it has greater arch support and a higher heel--consistent with the series work boot models which have made Nicks great: the Ranger and the BuilderPro."

},
{
    id:uuidv4(),
    title: 'Robert',
    image:"/images/robert_color_8_side.jpeg",
    last: 'Classic Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Color #8 CXL",
    leather:"Horween Chromexcel",
    price: 539,
    description: "Originally made for series workers who wanted a weekend boot, the Robert offers great arch support, paired with premium USA leathers. This boot differs from the Falcon in that it has greater arch support and a higher heel--consistent with the series work boot models which have made Nicks great: the Ranger and the BuilderPro."

},
{
    id:uuidv4(),
    title: 'Robert',
    image:"/images/robert_natual_waxed_flesh_55_medium_arch_pair_side_1.jpeg",
    last: 'Classic Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Natural Waxed FLesh",
    leather:"Horween Chromexcel",
    price: 539,
    description: "Originally made for series workers who wanted a weekend boot, the Robert offers great arch support, paired with premium USA leathers. This boot differs from the Falcon in that it has greater arch support and a higher heel--consistent with the series work boot models which have made Nicks great: the Ranger and the BuilderPro."

},
{
    id:uuidv4(),
    title: 'Robert',
    image:"/images/robert_predator_orange_55_medium_arch_side.jpeg_1.jpg",
    last: 'Classic Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Predator Orange",
    leather:"Horween Chromexcel",
    price: 539,
    description: "Originally made for series workers who wanted a weekend boot, the Robert offers great arch support, paired with premium USA leathers. This boot differs from the Falcon in that it has greater arch support and a higher heel--consistent with the series work boot models which have made Nicks great: the Ranger and the BuilderPro."

},
{
    id:uuidv4(),
    title: 'Robert',
    image:"/images/veg-tan-robert-nicks-1.jpeg",
    last: 'Classic Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Bridle",
    leather:"Wickett & Craig VegTan",
    price: 659,
    description: "Originally made for series workers who wanted a weekend boot, the Robert offers great arch support, paired with premium USA leathers. This boot differs from the Falcon in that it has greater arch support and a higher heel--consistent with the series work boot models which have made Nicks great: the Ranger and the BuilderPro."

},
{
    id:uuidv4(),
    title: 'Robert',
    image:"/images/robert-milled-buck-brown.jpeg",
    last: 'Classic Arch',
    height: '6"',
    outsole:"Vibram® V-Bar",
    type:"casual",
    color:"Milled Harness",
    leather:"Wickett & Craig VegTan",
    price: 659,
    description: "Originally made for series workers who wanted a weekend boot, the Robert offers great arch support, paired with premium USA leathers. This boot differs from the Falcon in that it has greater arch support and a higher heel--consistent with the series work boot models which have made Nicks great: the Ranger and the BuilderPro."

},

//Traveler 

{
    id:uuidv4(),
    title: 'Traveler',
    image:"/images/traveler-milled-buck-brown.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® Crepe 2021",
    type:"casual",
    color:"Milled Harness",
    leather:"Wickett & Craig VegTan",
    price: 630,
    description: "Built on our low-profile HNW Last, the Traveler is a great walking boot. This wedge soled boot was designed for those on their feet all day and can't have a heeled boot."

},
{
    id:uuidv4(),
    title: 'Traveler',
    image:"/images/traveler-dark-brown.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® Crepe 2021",
    type:"casual",
    color:"Bridle",
    leather:"Wickett & Craig VegTan",
    price: 630,
    description: "Built on our low-profile HNW Last, the Traveler is a great walking boot. This wedge soled boot was designed for those on their feet all day and can't have a heeled boot."

},
{
    id:uuidv4(),
    title: 'Traveler',
    image:"/images/traveler_predator_orange_side_single.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® Crepe 2021",
    type:"casual",
    color:"Predator Orange",
    leather:"Horween Chromexcel",
    price: 520,
    description: "Built on our low-profile HNW Last, the Traveler is a great walking boot. This wedge soled boot was designed for those on their feet all day and can't have a heeled boot."

},
{
    id:uuidv4(),
    title: 'Traveler',
    image:"/images/traveler_color8_burgundy_side.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® Crepe 2021",
    type:"casual",
    color:"Color #8 CXL",
    leather:"Horween Chromexcel",
    price: 520,
    description: "Built on our low-profile HNW Last, the Traveler is a great walking boot. This wedge soled boot was designed for those on their feet all day and can't have a heeled boot."

},
{
    id:uuidv4(),
    title: 'Traveler',
    image:"/images/traveler_brown_waxed_flesh_moderate_arch_pair_side.jpeg.jpg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® Crepe 2021",
    type:"casual",
    color:"Brown Waxed Flesh",
    leather:"Horween Chromexcel",
    price: 520,
    description: "Built on our low-profile HNW Last, the Traveler is a great walking boot. This wedge soled boot was designed for those on their feet all day and can't have a heeled boot."

},
//LIMITED RUN **********
{
    id:uuidv4(),
    title: "Maryam's Limited Run",
    image:"/images/LTDHorsehide.jpeg",
    last: 'Custom Choice',
    height: 'Custom Choice: 6" or 8"',
    outsole:"Vibram® Custom Sole Choice",
    type:"limited",
    color:"Natural",
    leather:"Maryam's VegTan Horse Rump",
    price: 670,
    description: "This Limited Preorder features Maryam's Horse Rump in its Natural color. The leather has a high gloss finish which shows its unique character and markings, distinct to the horse leather. These boots are cut from the rump portion of horsehide, maintaining a very tight grain and well-fitting boot. Maryam's Horse Rump is Veg Tanned and like our Wickett and Craig offerings, is a bit more susceptible to water. While the addition of conditioners may increase the boots' water resistance, these are not meant for very wet environments. These boots will come with our standard brown leather gusset."     

},
{
    id:uuidv4(),
    title: 'Nicks x Rose Anvil ND1',
    image:"/images/ND1Boot.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"limited",
    color:"",
    leather:"Horween Chromexcel",
    price: 620,
    description: "Modeled after the Nicks $1000 Indestructible Boot Concept featured on the Rose Anvil YouTube Channel. Limited to 500 pairs"

},
{
    id:uuidv4(),
    title: 'Dark Olive Custom',
    image:"/images/OliveCXL.jpeg",
    last: 'Moderate Arch',
    height: '8"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"limited",
    color:"Dark Olive",
    leather:"Horween Chromexcel ",
    price: 620,
    description: "A bit darker than standard Olive Chromexcel, the Dark Olive adds just enough subtle color without being too green. This material clocks in at 6-7 oz. thick, giving you the toughest Chromexcel boots on the market"

},
{
    id:uuidv4(),
    title: 'Fireball Tool x Nicks',
    image:"/images/fireballToolBPro.jpeg",
    last: 'Classic Arch',
    height: '10"',
    outsole:"Vibram® V-100 Lug Sole",
    type:"limited",
    color:"Black",
    leather:"Seidel - Maximum Support Work",
    price: 535,
    description: " Inspired by the boot Jason made here at the Nicks Handmade Boots shop, this Special Edition BuilderPro™ is only available for a limited time! Limited to 500 pairs. Are you on your feet 8-12 hours a day? The BuilderPro(TM) was designed with you in mind. If you are a tradesmen, mechanic, warehouse worker, construction worker, logger, or you’re doing anything else where you’re on your feet all day. This is your boot. Combining the highest grade leather on the market and our legendary arch support technology, you can’t beat the BuilderPro for serious work."
},




]

export default products;