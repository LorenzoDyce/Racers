'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Drivers', [{
        name: 'Lukas Jakob',
        nationality: 'Austrian',
        bio: 'Lukas Jakobe is a 28-year-old former tradesperson\'s assistant who enjoys binge-watching boxed sets, eating out and badminton. He is exciting and stable, but can also be very unintelligent and a bit rude. \
        He is Austrian who defines himself as straight. He finished school and then left academia. He has a severe phobia of clowns, and is obsessed with organic vegetables. \
        Physically, Lukas is slightly overweight but otherwise in good shape. He is average-height with fair skin, ginger hair and blue eyes. He has one or two distinguishing features including a birthmark on his forehead and asymmetrical ears. \
        He grew up in a working class neighbourhood. His parents separated when he was small, but remained friends and provided a happy, stable home. \
        He is currently married to Emmeline Philippa Graham. Emmeline is the same age as him and works as a scientist. \
        Lukas has two children with wife Emmeline: Leslie aged 0 and Erik aged 1. \
        Lukas\'s best friend is a former tradesperson\'s assistant called Milton Hunt. They are inseparable. He also hangs around with Jakob Fox and Amar Bryant. They enjoy watching television together.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tian Zhen',
        nationality: 'Chinese',
        bio: 'Tian Zhen is a 24-year-old business studies student who enjoys golf, eating out and relaxing. He is exciting and stable, but can also be very sneaky and a bit greedy. \
        He is a Chinese Buddhist who defines himself as straight. He is currently at college. studying business studies. He is obsessed with over-knee socks. \
        Physically, Tian is in good shape. He is short with olive skin, brown hair and brown eyes. \
        He grew up in a middle class neighbourhood. His parents separated when he was small, but remained friends and provided a happy, stable home. \
        He is currently in a relationship with Esme Hunter Murphy. Esme is the same age as him and works as a student. \
        Tian\'s best friend is a business studies student called Karen Kennedy. They are inseparable. He also hangs around with a business studies student called Jeanne Smyth. They enjoy attending museums together.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Mahdi el-Mahmud',
        nationality: 'Iranian',
        bio: 'Mahdi el-Mahmud is a 40-year-old professional sports person who enjoys painting, camping and spreading right-wing propoganda. He is gentle and giving, but can also be very boring and a bit dull.\
        He is an Iranian Muslim who defines himself as straight. He has a degree in sports science. He has a severe phobia of apostrophes\
        Physically, Mahdi is slightly overweight but otherwise in good shape. He is average-height with olive skin, black hair and black eyes.\
        He grew up in a middle class neighbourhood. After his father died when he was young, he was raised by his mother\
        He is currently married to Layla Rihanna Ward. Layla is 3 years older than him and works as a legal secretary.\
        Mahdi has one child with wife Layla: Ayla aged 0.\
        Mahdi\'s best friend is a professional sports person called Nadine Flores. They get on well most of the time. He also hangs around with a professional sports person called Safa Brown. They enjoy playing video games together.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Vineet Ganapuli',
        nationality: 'Indian',
        bio: 'Vineet Ganapuli is a 32-year-old personal trainer who enjoys painting, binge-watching boxed sets and finger painting. He is exciting and stable, but can also be very lazy and a bit sneaky.\
        He is an Indian Hindu who defines himself as straight. He started studying sports science at college but never finished the course. He is a vegan. He is obsessed with being painted blue.\
        Physically, Vineet is slightly overweight but otherwise in good shape. He is very short with almond skin, white hair and brown eyes. Unusually, he has a prosthetic eye; a shark ate his. He has a blue inksplot tattoo between his shoulder blades.\
        He grew up in a middle class neighbourhood. He was raised in a happy family home with two loving parents.\
        He is currently in a relationship with Phyllis Aidan Morrison. Phyllis is the same age as him and works as a builder.\
        Vineet\'s best friend is a personal trainer called Tia Miller. They are inseparable. He also hangs around with Lula Gray and Diane Foster. They enjoy watching television together.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Jabin Ginsberg',
        nationality: 'Israeli',
        bio: 'Jabin Ginsberg is a 39-year-old gym assistant who enjoys ferret racing, spreading fake news on Facebook and cookery. He is exciting and stable, but can also be very lazy and a bit greedy. \
        He is Israeli who defines himself as straight. He has a post-graduate degree in sports science. He is allergic to gluten. He has a severe phobia of feet \
        Physically, Jabin is in good shape. He is tall with olive skin, copper hair and brown eyes. \
        He grew up in a working class neighbourhood. His parents separated when he was small, but remained friends and provided a happy, stable home. \
        He is currently in a relationship with Sara Alma Brooks. Sara is the same age as him and works as a legal secretary. \
        Jabin has one child with ex-girlfriend Toby: Debbie aged 16. \
        Jabin\'s best friend is a gym assistant called Gregory Bell. They get on well most of the time. He also hangs around with Carmen Gray and Josephine Evans. They enjoy bargain hunting together.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Katy Willis',
        nationality: 'American',
        bio: 'Katy Willis is a 22-year-old town counsellor who enjoys reading, cookery and watching YouTube videos. She is exciting and stable, but can also be very sneaky and a bit stingy. \
        She is American who defines herself as gay. She finished school and then left academia. \
        Physically, Katy is in pretty good shape. She is short with bronze skin, brown hair and yellow eyes. She has a birthmark on her forehead. \
        She grew up in an upper class neighbourhood. Her parents separated when she was small, but remained friends and provided a happy, stable home. \
        She is currently in a relationship with Harriet Mabel Holland. Harriet is the same age as her and works as a student. \
        Katy\'s best friend is a town counsellor called Claire Hope. They get on well most of the time. She also hangs around with Edmund Moss and Ada Simmons. They enjoy golf together.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Dalton Williams',
        nationality: 'Jamaican',
        bio: 'Dalton Williams is a 35-year-old tradesperson with own business who enjoys relaxing, stealing candy from babies and cookery. He is exciting and stable, but can also be very sneaky and a bit greedy. \
        He is a Jamaican Christian who defines himself as straight. He started college but never finished the course. He is obsessed with Frozen. \
        Physically, Dalton is in pretty good shape. He is tall with walnut skin, grey hair and black eyes. \
        He grew up in a middle class neighbourhood. He was raised in a happy family home with two loving parents. \
        He is currently in a relationship with Rory Kayley Paul. Rory is the same age as him and works as a professional sports person. \
        Dalton has one child with girlfriend Rory: Calvin aged 1. \
        Dalton\'s best friend is a tradesperson with own business called Mackenzie Howe. They are inseparable. He also hangs around with Barbara Cunningham and Serena Nichols. They enjoy camping together.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Tolumade Oladipo',
        nationality: 'Nigerian',
        bio: 'Tolumade Oladipo is a 26-year-old semi-professional sports person who enjoys listening to the radio, spreading fake news on Facebook and theatre. He is inspiring and energetic, but can also be very stingy and a bit selfish. \
        He is Nigerian. He has a post-graduate degree in sports science. \
        Physically, Tolumade is in pretty good shape. He is very tall with walnut skin, black hair and black eyes. \
        He grew up in a working class neighbourhood. After his mother died when he was young, he was raised by his father \
        He is currently married to Sue Maisie O\'Sullivan. Sue is 3 years older than him and works as a receptionist. \
        Tolumade has one child with wife Sue: Amber aged 1. \
        Tolumade\'s best friend is a semi-professional sports person called Kiera Walker. They have a very firey friendship. He also hangs around with Tina Garcia and Renee Patel. They enjoy walking together.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Liam Smiith',
        nationality: "Scottish",
        bio: 'Liam Smiith is a 27-year-old trainee doctor who enjoys donating blood, social card games and watching sport. He is energetic and friendly, but can also be very lazy and a bit standoffish. \
        He is a Scottish Christian who defines himself as straight. He has a degree in medicine.\
        Physically, Liam is in pretty good shape. He is tall with pale skin, copper hair and blue eyes. He has buck teeth. \
        He grew up in an upper class neighbourhood. After his father died when he was young, he was raised by his mother \
        He is currently in a relationship with Aidan Shona Hernandez. Aidan is the same age as him and works as a junior doctor.\
        Liam\'s best friend is a trainee doctor called Jeanne Davis. They get on well most of the time. He also hangs around with Kenneth Brown and Jaydan Perez. They enjoy reading together.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Anna Henriquez',
        nationality: 'Australian',
        bio: 'Anna Henriquez is a 31-year-old chef at chain restaurant who enjoys watching television, donating blood and tennis. She is friendly and creative, but can also be very boring and a bit boring. \
        She is an Australian Buddhist. She has a post-graduate degree in food science. \
        Physically, Anna is in pretty good shape. She is short with cocao skin, brown hair and brown eyes. \
        She grew up in a middle class neighbourhood. Her parents separated when she was small, but remained friends and provided a happy, stable home. \
        She is currently in a relationship with Oskar Tracey Mclaughlin. Oskar is 13 years older than her and works as a professional sports person. \
        Anna\'s best friend is a chef at chain restaurant called Yvonne Moss. They get on well most of the time. She also hangs around with Robin Cruz and Catriona O\'Sullivan. They enjoy watching sport together.',
        createdAt: new Date(),
        updatedAt: new Date()

      }, ],  {});


      const drivers = await queryInterface.sequelize.query(
        `SELECT id from DRIVERS;`
      );
  
      const driverRows = drivers[0];

      console.log(driverRows)
  

      return await queryInterface.bulkInsert('Cars', [{
        DriverId: driverRows[0].id,
        make: 'mercedez',
        model: 'matic',
        transmission: 'auto',
        year: 2015,
        color: 'white',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        DriverId: driverRows[1].id,
        make: 'BMW',
        model: 'rang',
        transmission: 'manual',
        year: 2018,
        color: 'grey',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        DriverId: driverRows[2].id,
        make: 'Koenigsegg',
        model: 'Agera R',
        transmission: 'auto',
        year: 2015,
        color: 'red',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        DriverId: driverRows[3].id,
        make: 'HENNESSEY VENOM',
        model: 'GT',
        transmission: 'auto',
        year: 2015,
        color: 'Dark grey',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        DriverId: driverRows[4].id,
        make: 'BUGATTI VEYRON',
        model: 'SUPER SPORT',
        transmission: 'auto',
        year: 2015,
        color: 'Black & orange',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        DriverId: driverRows[5].id,
        make: '9FF',
        model: 'GT9-R',
        transmission: 'auto',
        year: 2015,
        color: 'blue',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        DriverId: driverRows[6].id,
        make: 'SSC',
        model: 'ULTIMATE AERO',
        transmission: 'auto',
        year: 2015,
        color: 'white',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        DriverId: driverRows[7].id,
        make: 'KOENIGSEGG',
        model: 'CCR',
        transmission: 'auto',
        year: 2015,
        color: 'grey',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        DriverId: driverRows[8].id,
        make: 'MCLAREN',
        model: 'F1',
        transmission: 'auto',
        year: 2015,
        color: 'orange',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        DriverId: driverRows[9].id,
        make: 'ZENVO',
        model: 'ST 1',
        transmission: 'auto',
        year: 2015,
        color: 'white',
        createdAt: new Date(),
        updatedAt: new Date()
    
      }, ], {});      


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Drivers', null, {});
    await queryInterface.bulkDelete('Cars', null, {});
  }
};
