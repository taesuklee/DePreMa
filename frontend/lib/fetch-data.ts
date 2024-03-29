import axios from 'axios'
import { useReadContract } from 'wagmi'
import { contractAddress } from './constants'
import { predictionABI } from '@/generated'

const mockdata = {
  data: [
    {
      id: 1,
      sport_id: 2,
      home_team_id: 13985,
      away_team_id: 13373,
      league_id: 7317,
      challenge_id: 72059,
      season_id: 42050,
      venue_id: null,
      referee_id: null,
      slug: '2024-02-07-r16p13-r16p14-5',
      name: 'Tirante T. – Díaz Acosta F.',
      status: 'notstarted',
      status_more: '-',
      time_details: null,
      home_team: {
        id: 13985,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'tirante-t',
        name: 'Tirante T.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/tirante-t.png',
        name_translations: {
          en: 'Tirante T.',
          ru: 'Тиранте, Тьяго Агустин',
          es: 'Tirante, Thiago Agustin',
          fr: 'Tirante, Thiago Agustin',
          zh: '蒂兰特, 蒂亚戈·阿古斯丁',
          el: 'Τιράντε, Τιάγκο Αγκουστίν',
          pt: 'Thiago Agustin Tirante',
        },
        name_short: 'Tirante T.',
        name_full: 'Tirante, Thiago Agustin',
        name_code: 'TIR',
        has_sub: false,
        gender: 'M',
        is_nationality: false,
        country_code: 'ARG',
        country: 'Argentina',
        flag: 'argentina',
        foundation: null,
      },
      away_team: {
        id: 13373,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'diaz-acosta-f',
        name: 'Díaz Acosta F.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/diaz-acosta-f.png',
        name_translations: {
          en: 'Díaz Acosta F.',
          ru: 'Диас Акоста, Факундо',
          zh: '迪亚斯·阿科斯塔，法昆多',
          pt: 'Facundo Diaz Acosta',
        },
        name_short: 'Díaz Acosta F.',
        name_full: 'Díaz Acosta, Facundo',
        name_code: 'DIA',
        has_sub: false,
        gender: 'M',
        is_nationality: false,
        country_code: 'ARG',
        country: 'Argentina',
        flag: 'argentina',
        foundation: null,
      },
      start_at: '2024-03-08 22:50:00',
      priority: 1,
      home_score: null,
      away_score: null,
      winner_code: null,
      aggregated_winner_code: null,
      result_only: false,
      coverage: null,
      ground_type: 'Red clay',
      round_number: 5,
      series_count: null,
      medias_count: null,
      status_lineup: null,
      first_supply: null,
      cards_code: null,
      event_data_change: null,
      lasted_period: null,
      default_period_count: 3,
      attendance: null,
      cup_match_order: null,
      cup_match_in_round: null,
      periods: {
        current: 'Match',
        period_1: '1st set',
        period_2: '2nd set',
        period_3: '3rd set',
        period_4: '4th set',
        period_5: '5th set',
        point: 'Game',
      },
      round_info: {
        round: 5,
        name: 'Round of 16',
        cupRoundType: 8,
      },
      periods_time: null,
      main_odds: {
        outcome_1: {
          value: 2.2,
          change: 1,
        },
        outcome_2: {
          value: 1.67,
          change: -1,
        },
      },
      league: {
        id: 7317,
        sport_id: 2,
        section_id: 145,
        slug: 'atp-cordoba',
        name: 'Cordoba',
        name_translations: {
          en: 'Cordoba',
        },
        has_logo: true,
        logo: 'https://tipsscore.com/resb/league/atp-cordoba.png',
      },
      challenge: {
        id: 72059,
        sport_id: 2,
        league_id: 7317,
        slug: 'cordoba-argentina-3',
        name: 'Cordoba, Argentina',
        name_translations: {
          en: 'Cordoba, Argentina',
        },
        order: 0,
        priority: 0,
      },
      season: {
        id: 42050,
        league_id: 7317,
        slug: '2024',
        name: 'ATP Cordoba, Argentina Men Singles 2024',
        year_start: 2024,
        year_end: null,
      },
      section: {
        id: 145,
        sport_id: 2,
        slug: 'atp',
        name: 'ATP',
        priority: 7,
        flag: 'atp',
      },
      sport: {
        id: 2,
        slug: 'tennis',
        name: 'Tennis',
      },
    },
    {
      id: 2,
      sport_id: 2,
      home_team_id: 101989,
      away_team_id: 39987,
      league_id: 4381,
      challenge_id: 72112,
      season_id: 42185,
      venue_id: null,
      referee_id: null,
      slug: '2024-02-08-saito-s-hule-p',
      name: 'Saito S. – Hule P.',
      status: 'notstarted',
      status_more: '-',
      time_details: null,
      home_team: {
        id: 101989,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'saito-s',
        name: 'Saito S.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/saito-s.png',
        name_translations: {
          en: 'Saito S.',
          pt: 'Sara Saito',
        },
        name_short: 'Saito S.',
        name_full: 'Saito, Sara',
        name_code: 'SAI',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'JPN',
        country: 'Japan',
        flag: 'japan',
        foundation: null,
      },
      away_team: {
        id: 39987,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'hule-p',
        name: 'Hule P.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/hule-p.png',
        name_translations: {
          en: 'Hule P.',
          ru: 'Петра Хьюле',
          el: 'Χούλε, Πέτρα',
          pt: 'Petra Hule',
        },
        name_short: 'Hule P.',
        name_full: 'Hule, Petra',
        name_code: 'HUL',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'AUS',
        country: 'Australia',
        flag: 'australia',
        foundation: null,
      },
      start_at: '2024-03-08 23:00:00',
      priority: 1,
      home_score: null,
      away_score: null,
      winner_code: null,
      aggregated_winner_code: null,
      result_only: false,
      coverage: null,
      ground_type: 'Hardcourt outdoor',
      round_number: 27,
      series_count: null,
      medias_count: null,
      status_lineup: null,
      first_supply: null,
      cards_code: null,
      event_data_change: null,
      lasted_period: null,
      default_period_count: 3,
      attendance: null,
      cup_match_order: null,
      cup_match_in_round: null,
      periods: {
        current: 'Match',
        period_1: '1st set',
        period_2: '2nd set',
        period_3: '3rd set',
        period_4: '4th set',
        period_5: '5th set',
        point: 'Game',
      },
      round_info: {
        round: 27,
        name: 'Quarterfinal',
        cupRoundType: 4,
      },
      periods_time: null,
      main_odds: {
        outcome_1: {
          value: 1.5,
          change: 0,
        },
        outcome_2: {
          value: 2.5,
          change: 0,
        },
      },
      league: {
        id: 4381,
        sport_id: 2,
        section_id: 141,
        slug: 'itf-women-burnie-1',
        name: 'Burnie',
        name_translations: {
          en: 'Burnie',
        },
        has_logo: false,
        logo: 'https://tipsscore.com/resb/no-league.png',
      },
      challenge: {
        id: 72112,
        sport_id: 2,
        league_id: 4381,
        slug: 'burnie-singles-main-w-itf-aus-02a-2',
        name: 'Burnie, Singles Main, W-ITF-AUS-02A',
        name_translations: {
          en: 'Burnie, Singles Main, W-ITF-AUS-02A',
        },
        order: 0,
        priority: 0,
      },
      season: {
        id: 42185,
        league_id: 4381,
        slug: '2024',
        name: 'ITF Australia 02A, Women Singles 2024',
        year_start: 2024,
        year_end: null,
      },
      section: {
        id: 141,
        sport_id: 2,
        slug: 'itf-women',
        name: 'ITF Women',
        priority: 2,
        flag: 'itf-women',
      },
      sport: {
        id: 2,
        slug: 'tennis',
        name: 'Tennis',
      },
    },
    {
      id: 3,
      sport_id: 2,
      home_team_id: 97363,
      away_team_id: 16701,
      league_id: 4381,
      challenge_id: 72112,
      season_id: 42185,
      venue_id: null,
      referee_id: null,
      slug: '2024-02-08-ito-a-swan-k',
      name: 'Ito A. – Swan K.',
      status: 'notstarted',
      status_more: '-',
      time_details: null,
      home_team: {
        id: 97363,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'ito-a',
        name: 'Ito A.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/ito-a.png',
        name_translations: {
          en: 'Ito A.',
          es: 'Ito, Aoi',
          fr: 'Ito, Aoi',
        },
        name_short: 'Ito A.',
        name_full: 'Ito, Aoi',
        name_code: 'ITO',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'JPN',
        country: 'Japan',
        flag: 'japan',
        foundation: null,
      },
      away_team: {
        id: 16701,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'swan-k',
        name: 'Swan K.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/swan-k.png',
        name_translations: {
          en: 'Swan K.',
          ru: 'Суон, Кэти',
          zh: '斯旺，凯蒂',
          el: 'Σβαν, Κάτιε',
          pt: 'Katie Swan',
        },
        name_short: 'Swan K.',
        name_full: 'Swan, Katie',
        name_code: 'SWA',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'GBR',
        country: 'United Kingdom',
        flag: 'great-britain',
        foundation: null,
      },
      start_at: '2024-03-08 23:00:00',
      priority: 1,
      home_score: null,
      away_score: null,
      winner_code: null,
      aggregated_winner_code: null,
      result_only: false,
      coverage: null,
      ground_type: 'Hardcourt outdoor',
      round_number: 27,
      series_count: null,
      medias_count: null,
      status_lineup: null,
      first_supply: null,
      cards_code: null,
      event_data_change: null,
      lasted_period: null,
      default_period_count: 3,
      attendance: null,
      cup_match_order: null,
      cup_match_in_round: null,
      periods: {
        current: 'Match',
        period_1: '1st set',
        period_2: '2nd set',
        period_3: '3rd set',
        period_4: '4th set',
        period_5: '5th set',
        point: 'Game',
      },
      round_info: {
        round: 27,
        name: 'Quarterfinal',
        cupRoundType: 4,
      },
      periods_time: null,
      main_odds: {
        outcome_1: {
          value: 2.75,
          change: 0,
        },
        outcome_2: {
          value: 1.4,
          change: 0,
        },
      },
      league: {
        id: 4381,
        sport_id: 2,
        section_id: 141,
        slug: 'itf-women-burnie-1',
        name: 'Burnie',
        name_translations: {
          en: 'Burnie',
        },
        has_logo: false,
        logo: 'https://tipsscore.com/resb/no-league.png',
      },
      challenge: {
        id: 72112,
        sport_id: 2,
        league_id: 4381,
        slug: 'burnie-singles-main-w-itf-aus-02a-2',
        name: 'Burnie, Singles Main, W-ITF-AUS-02A',
        name_translations: {
          en: 'Burnie, Singles Main, W-ITF-AUS-02A',
        },
        order: 0,
        priority: 0,
      },
      season: {
        id: 42185,
        league_id: 4381,
        slug: '2024',
        name: 'ITF Australia 02A, Women Singles 2024',
        year_start: 2024,
        year_end: null,
      },
      section: {
        id: 141,
        sport_id: 2,
        slug: 'itf-women',
        name: 'ITF Women',
        priority: 2,
        flag: 'itf-women',
      },
      sport: {
        id: 2,
        slug: 'tennis',
        name: 'Tennis',
      },
    },
    {
      id: 4,
      sport_id: 2,
      home_team_id: 73776,
      away_team_id: 12420,
      league_id: 4381,
      challenge_id: 72112,
      season_id: 42185,
      venue_id: null,
      referee_id: null,
      slug: '2024-02-08-joint-m-mcphee-k',
      name: 'Joint M. – McPhee K.',
      status: 'notstarted',
      status_more: '-',
      time_details: null,
      home_team: {
        id: 73776,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'joint-m',
        name: 'Joint M.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/joint-m.png',
        name_translations: {
          en: 'Joint M.',
        },
        name_short: 'Joint M.',
        name_full: 'Joint, Maya',
        name_code: 'JOI',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'AUS',
        country: 'Australia',
        flag: 'australia',
        foundation: null,
      },
      away_team: {
        id: 12420,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'mcphee-k',
        name: 'McPhee K.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/mcphee-k.png',
        name_translations: {
          en: 'McPhee K.',
          ru: 'Кайла Макфи',
          es: 'Mcphee, Kaylah',
          fr: 'Kaylah McPhee',
          zh: '麦克菲, 凯拉赫',
          el: 'Μάκφε, Καγλάχ',
          it: 'Mpchee, Kaylah',
          pt: 'Kaylah McPhee',
        },
        name_short: 'McPhee K.',
        name_full: 'McPhee, Kaylah',
        name_code: 'MCP',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'AUS',
        country: 'Australia',
        flag: 'australia',
        foundation: null,
      },
      start_at: '2024-03-08 23:00:00',
      priority: 1,
      home_score: null,
      away_score: null,
      winner_code: null,
      aggregated_winner_code: null,
      result_only: false,
      coverage: null,
      ground_type: 'Hardcourt outdoor',
      round_number: 27,
      series_count: null,
      medias_count: null,
      status_lineup: null,
      first_supply: null,
      cards_code: null,
      event_data_change: null,
      lasted_period: null,
      default_period_count: 3,
      attendance: null,
      cup_match_order: null,
      cup_match_in_round: null,
      periods: {
        current: 'Match',
        period_1: '1st set',
        period_2: '2nd set',
        period_3: '3rd set',
        period_4: '4th set',
        period_5: '5th set',
        point: 'Game',
      },
      round_info: {
        round: 27,
        name: 'Quarterfinal',
        cupRoundType: 4,
      },
      periods_time: null,
      main_odds: {
        outcome_1: {
          value: 1.33,
          change: 0,
        },
        outcome_2: {
          value: 3.25,
          change: 0,
        },
      },
      league: {
        id: 4381,
        sport_id: 2,
        section_id: 141,
        slug: 'itf-women-burnie-1',
        name: 'Burnie',
        name_translations: {
          en: 'Burnie',
        },
        has_logo: false,
        logo: 'https://tipsscore.com/resb/no-league.png',
      },
      challenge: {
        id: 72112,
        sport_id: 2,
        league_id: 4381,
        slug: 'burnie-singles-main-w-itf-aus-02a-2',
        name: 'Burnie, Singles Main, W-ITF-AUS-02A',
        name_translations: {
          en: 'Burnie, Singles Main, W-ITF-AUS-02A',
        },
        order: 0,
        priority: 0,
      },
      season: {
        id: 42185,
        league_id: 4381,
        slug: '2024',
        name: 'ITF Australia 02A, Women Singles 2024',
        year_start: 2024,
        year_end: null,
      },
      section: {
        id: 141,
        sport_id: 2,
        slug: 'itf-women',
        name: 'ITF Women',
        priority: 2,
        flag: 'itf-women',
      },
      sport: {
        id: 2,
        slug: 'tennis',
        name: 'Tennis',
      },
    },
    {
      id: 5,
      sport_id: 2,
      home_team_id: 17005,
      away_team_id: 150847,
      league_id: 5477,
      challenge_id: 72144,
      season_id: 42290,
      venue_id: 22183,
      referee_id: null,
      slug: '2024-02-08-rodriguez-v-sanchez-palau-a-s-hewitt-d-hu-v',
      name: 'Rodriguez V / Sanchez Palau A S – Hewitt D / Hu V',
      status: 'notstarted',
      status_more: '-',
      time_details: null,
      home_team: {
        id: 17005,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'rodriguez-v-sanchez-palau-a-s',
        name: 'Rodriguez V / Sanchez Palau A S',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/rodriguez-v-sanchez-palau-a-s.png',
        name_translations: {
          en: 'Rodriguez V / Sanchez Palau A S',
          ru: 'Родригез В / Санчез А',
          zh: '罗德里格斯，维多利亚 / 索菲亚.桑切斯',
          el: 'Ροντρίγκεζ Β / Σάντσεζ Ά',
          pt: 'V Rodriguez / A S Sanchez Palau',
        },
        name_short: 'Rodriguez V / Sanchez Palau A S',
        name_full: 'Rodriguez V / Sanchez Palau A S',
        name_code: 'RSP',
        has_sub: true,
        gender: null,
        is_nationality: false,
        country_code: null,
        country: null,
        flag: null,
        foundation: null,
      },
      away_team: {
        id: 150847,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'hewitt-d-hu-v',
        name: 'Hewitt D / Hu V',
        has_logo: false,
        logo: 'https://tipsscore.com/resb/no-league.png',
        name_translations: {
          en: 'Hewitt D / Hu V',
        },
        name_short: 'Hewitt D / Hu V',
        name_full: 'Hewitt D / Hu V',
        name_code: 'H/H',
        has_sub: true,
        gender: 'F',
        is_nationality: false,
        country_code: null,
        country: null,
        flag: null,
        foundation: null,
      },
      start_at: '2024-03-08 23:30:00',
      priority: 1,
      home_score: null,
      away_score: null,
      winner_code: null,
      aggregated_winner_code: null,
      result_only: false,
      coverage: null,
      ground_type: 'Hardcourt outdoor',
      round_number: 27,
      series_count: null,
      medias_count: null,
      status_lineup: null,
      first_supply: null,
      cards_code: null,
      event_data_change: null,
      lasted_period: null,
      default_period_count: 3,
      attendance: null,
      cup_match_order: null,
      cup_match_in_round: null,
      periods: {
        current: 'Match',
        period_1: '1st set',
        period_2: '2nd set',
        period_3: '3rd set',
        period_4: '4th set',
        period_5: '5th set',
        point: 'Game',
      },
      round_info: {
        round: 27,
        name: 'Quarterfinal',
        cupRoundType: 4,
      },
      periods_time: null,
      main_odds: {
        outcome_1: {
          value: 2.25,
          change: 0,
        },
        outcome_2: {
          value: 1.57,
          change: 0,
        },
      },
      league: {
        id: 5477,
        sport_id: 2,
        section_id: 141,
        slug: 'itf-women-itf-mexico-01a-women-doubles',
        name: 'ITF Mexico 01A, Women Doubles',
        name_translations: {
          en: 'ITF Mexico 01A, Women Doubles',
        },
        has_logo: false,
        logo: 'https://tipsscore.com/resb/no-league.png',
      },
      challenge: {
        id: 72144,
        sport_id: 2,
        league_id: 5477,
        slug: 'irapuato-doubles-main-w-itf-mex-01a',
        name: 'Irapuato, Doubles Main, W-ITF-MEX-01A',
        name_translations: {
          en: 'Irapuato, Doubles Main, W-ITF-MEX-01A',
        },
        order: 0,
        priority: 0,
      },
      season: {
        id: 42290,
        league_id: 5477,
        slug: '2024',
        name: 'ITF Mexico 01A, Women Doubles 2024',
        year_start: 2024,
        year_end: null,
      },
      section: {
        id: 141,
        sport_id: 2,
        slug: 'itf-women',
        name: 'ITF Women',
        priority: 2,
        flag: 'itf-women',
      },
      sport: {
        id: 2,
        slug: 'tennis',
        name: 'Tennis',
      },
    },
    {
      id: 6,
      sport_id: 2,
      home_team_id: 11746,
      away_team_id: 13131,
      league_id: 7317,
      challenge_id: 72059,
      season_id: 42050,
      venue_id: 11375,
      referee_id: null,
      slug: '2024-02-07-r16p5-r16p6-5',
      name: 'Etcheverry T. – Zapata Miralles B.',
      status: 'finished',
      status_more: 'FT',
      time_details: {
        period1Time: 4715,
      },
      home_team: {
        id: 11746,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'etcheverry-t',
        name: 'Etcheverry T.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/etcheverry-t.png',
        name_translations: {
          en: 'Etcheverry T.',
          ru: 'Этчеверри, Томас Мартин',
          zh: '埃切韦里,托马斯·马丁',
          el: 'Ετχέβεργ, Τόμας Μαρτίν',
          pt: 'Tomas Martin Etcheverry',
        },
        name_short: 'Etcheverry T.',
        name_full: 'Etcheverry, Tomas Martin',
        name_code: 'ETC',
        has_sub: false,
        gender: 'M',
        is_nationality: false,
        country_code: 'ARG',
        country: 'Argentina',
        flag: 'argentina',
        foundation: null,
      },
      away_team: {
        id: 13131,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'zapata-miralles-b',
        name: 'Zapata Miralles B.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/zapata-miralles-b.png',
        name_translations: {
          en: 'Zapata Miralles B.',
          ru: 'Сапата Мираллес, Бернабе',
          es: 'Zapata Miralles, Bernabé',
          fr: 'Zapata Miralles, Bernabe',
          zh: '扎帕塔·米拉莱斯,贝尔纳贝',
          el: 'Τζαπάτα Μιράλες, Μπερναμπέ',
          pt: 'Bernabe Zapata Miralles',
        },
        name_short: 'Zapata Miralles B.',
        name_full: 'Zapata Miralles, Bernabe',
        name_code: 'ZAP',
        has_sub: false,
        gender: 'M',
        is_nationality: false,
        country_code: 'ESP',
        country: 'Spain',
        flag: 'spain',
        foundation: null,
      },
      start_at: '2024-03-08 00:10:00',
      priority: 1,
      home_score: {
        current: 2,
        display: 2,
        period_1: 7,
        period_2: 6,
        normal_time: 2,
        point: '0',
      },
      away_score: {
        current: 0,
        display: 0,
        period_1: 5,
        period_2: 4,
        normal_time: 0,
        point: '0',
      },
      winner_code: 1,
      aggregated_winner_code: null,
      result_only: false,
      coverage: null,
      ground_type: 'Red clay',
      round_number: 5,
      series_count: null,
      medias_count: null,
      status_lineup: null,
      first_supply: 2,
      cards_code: null,
      event_data_change: null,
      lasted_period: 'period_2',
      default_period_count: 3,
      attendance: null,
      cup_match_order: null,
      cup_match_in_round: null,
      periods: {
        current: 'Match',
        period_1: '1st set',
        period_2: '2nd set',
        period_3: '3rd set',
        period_4: '4th set',
        period_5: '5th set',
        point: 'Game',
      },
      round_info: {
        round: 5,
        name: 'Round of 16',
        cupRoundType: 8,
      },
      periods_time: {
        period_1_time: 4715,
        period_2_time: 3242,
      },
      main_odds: {
        outcome_1: {
          value: 1.29,
          change: -1,
        },
        outcome_2: {
          value: 3.75,
          change: 1,
        },
      },
      league: {
        id: 7317,
        sport_id: 2,
        section_id: 145,
        slug: 'atp-cordoba',
        name: 'Cordoba',
        name_translations: {
          en: 'Cordoba',
        },
        has_logo: true,
        logo: 'https://tipsscore.com/resb/league/atp-cordoba.png',
      },
      challenge: {
        id: 72059,
        sport_id: 2,
        league_id: 7317,
        slug: 'cordoba-argentina-3',
        name: 'Cordoba, Argentina',
        name_translations: {
          en: 'Cordoba, Argentina',
        },
        order: 0,
        priority: 0,
      },
      season: {
        id: 42050,
        league_id: 7317,
        slug: '2024',
        name: 'ATP Cordoba, Argentina Men Singles 2024',
        year_start: 2024,
        year_end: null,
      },
      section: {
        id: 145,
        sport_id: 2,
        slug: 'atp',
        name: 'ATP',
        priority: 7,
        flag: 'atp',
      },
      sport: {
        id: 2,
        slug: 'tennis',
        name: 'Tennis',
      },
    },
    {
      id: 7,
      sport_id: 2,
      home_team_id: 23723,
      away_team_id: 12338,
      league_id: 5475,
      challenge_id: 72143,
      season_id: 42198,
      venue_id: 22183,
      referee_id: null,
      slug: '2024-02-07-carle-m-strakhova-v',
      name: 'Carlé M. – Strakhova V.',
      status: 'finished',
      status_more: 'FT',
      time_details: {
        currentPeriodStartTimestamp: 1707355762,
      },
      home_team: {
        id: 23723,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'carle-m',
        name: 'Carlé M.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/carle-m.png',
        name_translations: {
          en: 'Carlé M.',
          ru: 'Карл М.',
          es: 'Carle, Maria Lourdes',
          fr: 'Carle, Maria Lourdes',
          zh: '卡尔，玛丽亚·卢尔德',
          el: 'Κάρλ, Μαρία Λορντές',
          pt: 'Maria Lourdes Carle',
        },
        name_short: 'Carlé M.',
        name_full: 'Carlé, María Lourdes',
        name_code: 'CAR',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'ARG',
        country: 'Argentina',
        flag: 'argentina',
        foundation: null,
      },
      away_team: {
        id: 12338,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'strakhova-v',
        name: 'Strakhova V.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/strakhova-v.png',
        name_translations: {
          en: 'Strakhova V.',
          ru: 'Страхова, Валерия',
          es: 'Strakhova, Valeriya',
          zh: '斯特拉霍瓦,瓦莱里雅',
          el: 'Στράκοβα, Βαλέρια',
          pt: 'Valeriya Strakhova',
        },
        name_short: 'Strakhova V.',
        name_full: 'Strakhova, Valeriya',
        name_code: 'STR',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'UKR',
        country: 'Ukraine',
        flag: 'ukraine',
        foundation: null,
      },
      start_at: '2024-03-08 00:15:00',
      priority: 1,
      home_score: {
        current: 2,
        display: 2,
        period_1: 7,
        period_2: 7,
        normal_time: 2,
        point: '30',
      },
      away_score: {
        current: 0,
        display: 0,
        period_1: 5,
        period_2: 5,
        normal_time: 0,
        point: '30',
      },
      winner_code: 1,
      aggregated_winner_code: null,
      result_only: false,
      coverage: null,
      ground_type: 'Hardcourt outdoor',
      round_number: 6,
      series_count: null,
      medias_count: null,
      status_lineup: null,
      first_supply: 1,
      cards_code: null,
      event_data_change: null,
      lasted_period: 'period_2',
      default_period_count: 3,
      attendance: null,
      cup_match_order: null,
      cup_match_in_round: null,
      periods: {
        current: 'Match',
        period_1: '1st set',
        period_2: '2nd set',
        period_3: '3rd set',
        period_4: '4th set',
        period_5: '5th set',
        point: 'Game',
      },
      round_info: {
        round: 6,
        name: 'Round of 32',
        cupRoundType: 16,
      },
      periods_time: {
        period_1_time: 3689,
        period_2_time: 3761,
      },
      main_odds: {
        outcome_1: {
          value: 1.22,
          change: 0,
        },
        outcome_2: {
          value: 4,
          change: 0,
        },
      },
      league: {
        id: 5475,
        sport_id: 2,
        section_id: 141,
        slug: 'itf-women-itf-mexico-01a-women-singles',
        name: 'ITF Mexico 01A, Women Singles',
        name_translations: {
          en: 'ITF Mexico 01A, Women Singles',
        },
        has_logo: false,
        logo: 'https://tipsscore.com/resb/no-league.png',
      },
      challenge: {
        id: 72143,
        sport_id: 2,
        league_id: 5475,
        slug: 'irapuato-singles-main-w-itf-mex-01a',
        name: 'Irapuato, Singles Main, W-ITF-MEX-01A',
        name_translations: {
          en: 'Irapuato, Singles Main, W-ITF-MEX-01A',
        },
        order: 0,
        priority: 0,
      },
      season: {
        id: 42198,
        league_id: 5475,
        slug: '2024',
        name: 'ITF Mexico 01A, Women Singles 2024',
        year_start: 2024,
        year_end: null,
      },
      section: {
        id: 141,
        sport_id: 2,
        slug: 'itf-women',
        name: 'ITF Women',
        priority: 2,
        flag: 'itf-women',
      },
      sport: {
        id: 2,
        slug: 'tennis',
        name: 'Tennis',
      },
    },
    {
      id: 8,
      sport_id: 2,
      home_team_id: 16687,
      away_team_id: 97363,
      league_id: 4381,
      challenge_id: 72112,
      season_id: 42185,
      venue_id: 18751,
      referee_id: null,
      slug: '2024-02-06-aiava-d-ito-a',
      name: 'Aiava D. – Ito A.',
      status: 'finished',
      status_more: 'FT',
      time_details: {
        period1Time: 2386,
      },
      home_team: {
        id: 16687,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'aiava-d',
        name: 'Aiava D.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/aiava-d.png',
        name_translations: {
          en: 'Aiava D.',
          ru: 'Айява, Дестани',
          es: 'Aiava, Destanee',
          fr: 'Aiava, Destanee',
          zh: '阿拉瓦, 德斯坦内',
          el: 'Αϊάβα, Ντεστάνε',
          pt: 'Destanee Aiava',
        },
        name_short: 'Aiava D.',
        name_full: 'Aiava, Destanee',
        name_code: 'AIA',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'AUS',
        country: 'Australia',
        flag: 'australia',
        foundation: null,
      },
      away_team: {
        id: 97363,
        sport_id: 2,
        category_id: null,
        venue_id: null,
        manager_id: null,
        slug: 'ito-a',
        name: 'Ito A.',
        has_logo: true,
        logo: 'https://tipsscore.com/resb/team/ito-a.png',
        name_translations: {
          en: 'Ito A.',
          es: 'Ito, Aoi',
          fr: 'Ito, Aoi',
        },
        name_short: 'Ito A.',
        name_full: 'Ito, Aoi',
        name_code: 'ITO',
        has_sub: false,
        gender: 'F',
        is_nationality: false,
        country_code: 'JPN',
        country: 'Japan',
        flag: 'japan',
        foundation: null,
      },
      start_at: '2024-03-08 00:30:00',
      priority: 1,
      home_score: {
        current: 0,
        display: 0,
        period_1: 2,
        period_2: 2,
        normal_time: 0,
        point: '0',
      },
      away_score: {
        current: 2,
        display: 2,
        period_1: 6,
        period_2: 6,
        normal_time: 2,
        point: '40',
      },
      winner_code: 2,
      aggregated_winner_code: null,
      result_only: false,
      coverage: null,
      ground_type: 'Hardcourt outdoor',
      round_number: 5,
      series_count: null,
      medias_count: null,
      status_lineup: null,
      first_supply: 2,
      cards_code: null,
      event_data_change: null,
      lasted_period: 'period_2',
      default_period_count: 3,
      attendance: null,
      cup_match_order: null,
      cup_match_in_round: null,
      periods: {
        current: 'Match',
        period_1: '1st set',
        period_2: '2nd set',
        period_3: '3rd set',
        period_4: '4th set',
        period_5: '5th set',
        point: 'Game',
      },
      round_info: {
        round: 5,
        name: 'Round of 16',
        cupRoundType: 8,
      },
      periods_time: {
        period_1_time: 2386,
        period_2_time: 1763,
      },
      main_odds: {
        outcome_1: {
          value: 1.4,
          change: 0,
        },
        outcome_2: {
          value: 2.75,
          change: 0,
        },
      },
      league: {
        id: 4381,
        sport_id: 2,
        section_id: 141,
        slug: 'itf-women-burnie-1',
        name: 'Burnie',
        name_translations: {
          en: 'Burnie',
        },
        has_logo: false,
        logo: 'https://tipsscore.com/resb/no-league.png',
      },
      challenge: {
        id: 72112,
        sport_id: 2,
        league_id: 4381,
        slug: 'burnie-singles-main-w-itf-aus-02a-2',
        name: 'Burnie, Singles Main, W-ITF-AUS-02A',
        name_translations: {
          en: 'Burnie, Singles Main, W-ITF-AUS-02A',
        },
        order: 0,
        priority: 0,
      },
      season: {
        id: 42185,
        league_id: 4381,
        slug: '2024',
        name: 'ITF Australia 02A, Women Singles 2024',
        year_start: 2024,
        year_end: null,
      },
      section: {
        id: 141,
        sport_id: 2,
        slug: 'itf-women',
        name: 'ITF Women',
        priority: 2,
        flag: 'itf-women',
      },
      sport: {
        id: 2,
        slug: 'tennis',
        name: 'Tennis',
      },
    },
  ],
  meta: {
    current_page: '1',
    from: 1,
    last_page: 1,
    per_page: 2000,
    to: 243,
    total: 243,
  },
}

export const fetchGames = async (date) => {
  const options = {
    method: 'GET',
    url: `https://sportscore1.p.rapidapi.com/sports/2/events/date/${date}`,
    params: { page: '1' },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
    },
  }

  try {
    // const response = await axios.request(options)
    // console.log('🚀 ~ fetchGames ~ response:', response)
    // return response.data.data ?? mockdata.data
    return mockdata.data
    return
  } catch (error) {
    console.error(error)
  }
}

export const fetchActiveWagers = async () => {
  const wagers = []
  for (let i = 1; i < 6; i++) {
    const { data } = useReadContract({
      address: contractAddress,
      abi: predictionABI,
      functionName: 'getWager',
      args: [BigInt(i)],
    })

    wagers.push(data)
  }

  return wagers
}

export const fetchWager = async (wagerId) => {
  const { data } = useReadContract({
    address: contractAddress,
    abi: predictionABI,
    functionName: 'getWager',
    args: [BigInt(wagerId)],
  })

  return data
}

export const getNumber = () => {
  const { data } = useReadContract({
    address: contractAddress,
    abi: predictionABI,
    functionName: 'getOwner',
    // args: [BigInt(5)],
  })

  console.log('DATA', data)

  return data
}
