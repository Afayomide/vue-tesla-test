<template>
    <div class="library-container">
      <HeadingBar />
  
      <div class="select-container">
        <div class="select">
          <label for="timeframe">Timeframe: </label>
          <select v-model="selectedTimeFrame" id="timeframe">
            <option
              v-for="timeFrame in timeFrames"
              :key="timeFrame"
              :value="selectedTimeFrame"
            >
              <strong>{{ timeFrame }}</strong>
            </option>
          </select>
        </div>
  
        <div class="select">
          <label for="people">People: </label>
          <select v-model="selectedPerson" id="people">
            <option
              v-for="person in people"
              :key="person"
              :value="selectedPerson"
            >
              <strong>{{ person }}</strong>
            </option>
          </select>
        </div>
  
        <div class="select">
          <label for="topic">Topic: </label>
          <select v-model="selectedTopic" id="topic">
            <option v-for="topic in topics" :key="topic" :value="selectedTopic">
              <strong>{{ topic }}</strong>
            </option>
          </select>
        </div>
      </div>
  
      <div class="first-graphs">
        <div class="summaries">
          <div v-for="item in items" :key="item.id" class="summary">
            <p>{{ item.name }}</p>
            <p v-html="item.value" class="value"></p>
            <div v-if="item.graph" class="svg-container">
              <svg
                width="120"
                height="35"
                viewBox="0 0 140 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.53711 23.3759C1.53711 23.3759 6.94939 22.5829 13.1028 24.488C24.8063 28.1114 25.474 21.4761 29.8137 18.2767C33.7841 15.3496 37.0724 17.1355 41.4931 20.7151C44.7537 23.3552 49.5054 27.787 54.4264 27.0735C58.9247 26.4213 62.1136 21.2236 68.3487 19.9017C73.2904 18.854 77.3064 21.7322 82.9968 20.7151C90.7163 19.3354 94.1644 11.2124 99.6816 11.2124C106.491 11.2124 111.285 4.34229 117.48 4.34229C123.638 4.34229 124.474 8.38208 131.21 11.2124C136.36 13.3762 138.838 11.2124 138.838 11.2124V34.3991H1.53711V23.3759Z"
                  fill="url(#paint0_linear_2_2746)"
                />
                <path
                  d="M1.53711 19.7745C1.53711 19.7745 6.94939 18.9929 13.1028 20.8705C24.8063 24.4414 25.474 17.9022 29.8137 14.7491C33.7841 11.8644 37.0724 13.6244 41.4931 17.1522C44.7537 19.7541 49.5054 24.1217 54.4264 23.4186C58.9247 22.7758 62.1136 17.6533 68.3487 16.3505C73.2904 15.318 77.3064 18.1546 82.9968 17.1522C90.7163 15.7924 94.1644 7.78703 99.6816 7.78703C106.491 7.78703 111.285 1 117.48 1C123.638 1 123.965 4.99768 130.701 7.78703C135.851 9.91951 138.838 7.78703 138.838 7.78703"
                  stroke="#1B59F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2746"
                    x1="26.3509"
                    y1="19.5933"
                    x2="26.3509"
                    y2="34.3991"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0062FF" />
                    <stop offset="1" stop-color="white" stop-opacity="0.01" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
  
        <div class="bar-chart">
          <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
            :style="myStyles"
          />
        </div>
      </div>
  
      <div class="topics">
        <div class="weakests">
          <small class="faded">Weakest Topics</small>
          <div v-for="weakest in weakests" :key="weakest.id" class="weakest">
            <img :src="`/img/${weakest.image}`" />
            <div class="bar-info">
              <p>{{ weakest.name }}</p>
              <div class="progress weak">
                <div
                  class="progress-bar weak-bar"
                  role="progressbar"
                  :style="`width: ${weakest.width}%`"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <p class="progress-info">
              {{ weakest.width }}% <span class="faded">correct</span>
            </p>
          </div>
        </div>
  
        <div class="strongests">
          <small class="faded">Strongest Topics</small>
          <div
            v-for="strongest in strongests"
            :key="strongest.id"
            class="strongest"
          >
            <img :src="`/img/${strongest.image}`" />
            <div class="bar-info">
              <p>{{ strongest.name }}</p>
              <div class="progress strong">
                <div
                  class="progress-bar strong-bar"
                  role="progressbar"
                  :style="`width: ${strongest.width}%`"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <p class="progress-info">
              {{ strongest.width }}% <span class="faded">correct</span>
            </p>
          </div>
        </div>
      </div>
  
      <div class="leaderboard">
        <div class="users">
          <small class="faded">Users Leaderboard</small>
          <div v-for="user in users" :key="user.id" class="user">
            <div class="img-user">
            <img :src="`/img/${user.image}`" />
            <div class="user-info">
              <p>{{ user.name }}</p>
              <small class="faded"
                >{{ user.points }} Points - {{ user.correct }}% correct</small
              >
            </div>
  </div>
  
            <div class="progress-info">
              <p>{{ user.number }}</p>
              <img :src="user.number === 2 ? '/img/down.svg' : '/img/up.svg'" />
            </div>
          </div>
        </div>
  
        <div class="groups">
          <small class="faded">Users Leaderboard</small>
          <div v-for="group in groups" :key="group.id" class="group">
            <div class="user-info">
              <p>{{ group.name }}</p>
              <small class="faded"
                >{{ group.points }} Points - {{ group.correct }}% correct</small
              >
            </div>
  
            <div class="progress-info">
              <p>{{ group.number }}</p>
              <img :src="group.number === 2 ? '/img/down.svg' : '/img/up.svg'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeadingBar from '@/components/HeadingBar.vue';
  import { Bar } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  
  export default defineComponent({
    name: 'libraryView',
    computed: {
      myStyles() {
        return {
          position: 'relative',
        };
      },
    },
    data() {
      return {
        chartData: {
          labels: [
            'JAN',
            'FEB',
            'MAR',
            'APR',
            'MAY',
            'JUN',
            'JUL',
            'AUG',
            'SEP',
            'OCT',
            'NOV',
            'DEC',
          ],
          datasets: [
            {
              label: "Tesla",
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              borderWidth: 1,
              borderRadius: 10,
              data: [100, 120, 110, 210, 280, 200, 250, 90, 250, 310, 390, 400],
            },
          ],
        },
        chartOptions: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                stepSize: 100, // Set the step size to 100
                callback: function (value: any) {
                  return value; // Show the value as it is, in 100's
                },
              },
            },
            x: {
              barPercentage: 0.6,
              grid: {
                display: false,
              },
            },
            // barThickness: 10,
            // categoryPercentage: 0.1,
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 14,
                },
              },
            },
            tooltip: {
              enabled: true,
              backgroundColor: '#f5f5f5',
              titleColor: '#333',
              bodyColor: '#666',
            },
          },
        },
  
        selectedTimeFrame: 'All Time',
        timeFrames: ['Last 7 Days', 'This Month', 'This Year', 'Custom'],
  
        selectedPerson: 'All',
        people: ['Last 7 Days', 'This Month', 'This Year', 'Custom'],
  
        selectedTopic: 'All',
        topics: ['Last 7 Days', 'This Month', 'This Year', 'Custom'],
  
        items: [
          { id: 1, name: 'Active Users', value: '27<span>/80</span>' },
          { id: 2, name: 'Questions Answered', value: '3,298' },
          { id: 3, name: 'Av. Session Length', value: '2m 34s' },
          { id: 4, name: 'Starting Knowledge', value: '64%', graph: true },
          { id: 5, name: 'current Knowledge', value: '86%', graph: true },
          { id: 6, name: 'Knowledge Gain', value: '+34%', graph: true },
        ],
        weakests: [
          { id: 1, name: 'Food Safety', width: '74', image: 'weakest-food.svg' },
          {
            id: 2,
            name: 'Compliance Basic Procedures',
            width: '52',
            image: 'drugs.svg',
          },
          {
            id: 3,
            name: 'Company Networking',
            width: '36',
            image: 'networking.svg',
          },
        ],
        strongests: [
          { id: 1, name: 'Covid Protocols', width: '95', image: 'covid.svg' },
          {
            id: 2,
            name: 'Cyber Security Basics',
            width: '92',
            image: 'keyboard.svg',
          },
          {
            id: 3,
            name: 'Social Media Policies',
            width: '89',
            image: 'social.svg',
          },
        ],
        users: [
          {
            id: 1,
            name: 'Jesse Thomas',
            number: 1,
            points: 637,
            correct: 89,
            image: 'jesse.svg',
          },
          {
            id: 2,
            name: 'Thisal Mathiyazhagan',
            number: 2,
            points: 637,
            correct: 89,
            image: 'thisal.svg',
          },
          {
            id: 3,
            name: 'Helen Chuang',
            number: 3,
            points: 637,
            correct: 88,
            image: 'helen.svg',
          },
          {
            id: 4,
            name: 'Lura Silverman',
            number: 4,
            points: 637,
            image: 'lura.svg',
          },
        ],
        groups: [
          { id: 1, name: 'Houston Facility', number: 1, points: 52, correct: 97 },
          { id: 2, name: 'Test Group', number: 2, points: 52, correct: 95 },
          { id: 3, name: 'Sales Leadership', number: 3, points: 52, correct: 87 },
          { id: 4, name: 'Northeast Region', number: 4, points: 52 },
        ],
      };
    },
    components: {
      HeadingBar,
      Bar,
    },
  });
  </script>
  
  <style lang="scss" scoped>
  $half-space: 0 0 45%;
  .faded {
    color: rgba(0, 0, 0, 0.4);
  }
  .library-container {
    display: flex;
    flex-direction: column;
  }
  .select-container {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
  }
  .first-graphs {
    width: 100%;
    display: flex;
    gap: 1rem;
  
    .svg-container svg {
      width: 100%;
    }
    .summaries {
      width: 100%;
      flex: $half-space;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem; /* Add a small gap between items */
    }
    .summary {
   
      font-size: smaller;
      width: calc(
        20.33% - 1rem
      ); /* Each item takes up 1/3 of the row minus margin */
      flex: 1 0 calc(20.33% - 1rem); /* Ensure each item flexes but maintains its width */
      height: 7rem;
      padding: 1rem;
      border-radius: 20px;
      border: 1px solid rgba(239, 240, 246, 1);
      background-color: rgba(255, 255, 255, 1);
      margin: auto;
      box-sizing: content-box;
    }
  }
  
  .value {
    font-size: 15px;
    font-weight: 700;
    text-align: left;
  }
  
  .select {
    display: flex;
    align-items: center;
    width: 30%;
    border-radius: 20px;
    padding: 0.5rem 0.5rem;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(239, 240, 246, 1);
    font-size: 12px;
  
    select {
      display: flex;
      border: none;
      font-weight: 700;
      width: 100%;
      background-image: url('../../public/img/arrow_drop_down.svg'); /* Add your custom icon */
      background-repeat: no-repeat;
      background-position: right 10px center; /* Position the custom icon */
      appearance: none; /* Removes the default arrow */
      -webkit-appearance: none; /* Removes default arrow for Safari */
      background-color: white;
    }
  
    select:focus {
      border: none;
      outline: none; /* Remove default outline */
    }
  }
  
  .topics {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
    width: 100%;
  
    .weakests,
    .strongests {
      flex: $half-space;
      border-radius: 1rem;
      background-color: #fff;
      padding: 1rem;
  
      .bar-info {
        width: 60%;
      }
      img {
        width: 4rem;
      }
      .weakest,
      .strongest {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0;
      }
      p {
        margin: 0;
        font-size: smaller;
      }
  
      .progress {
        height: 0.6rem;
        background: linear-gradient(
          143.13deg,
          rgba(255, 191, 26, 0.2) 5.36%,
          rgba(255, 64, 128, 0.2) 94.64%
        );
  
        &.weak {
          background: linear-gradient(
            143.13deg,
            rgba(255, 191, 26, 0.2) 5.36%,
            rgba(255, 64, 128, 0.2) 94.64%
          );
        }
  
        &.strong {
          background: linear-gradient(
            270deg,
            rgba(47, 234, 155, 0.2) 15.5%,
            rgba(127, 221, 83, 0.2) 85.5%
          );
        }
      }
  
      .progress-bar {
        width: 100%;
        &.weak-bar {
          background: linear-gradient(143.13deg, #ffbf1a 5.36%, #ff4080 94.64%);
        }
        &.strong-bar {
          background: linear-gradient(270deg, #2fea9b 15.5%, #7fdd53 85.5%);
        }
      }
    }
  }
  
  .leaderboard {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
  
    .users,
    .groups {
      flex: $half-space;
      border-radius: 1rem;
      background-color: #fff;
      padding: 1rem 1rem;
  
      .img-user{
        display: flex;
        width: 80%;
   .user-info {
    margin-left: 2rem; 
      }
  
      }
      .user,
      .group {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem;
      }
  
      p {
        margin: 0;
        font-size: smaller;
      }
     
    }
  }
  
  .bar-chart {
    flex: 0 0 50%;
  }
  @media (max-width: 1000px) {
    .first-graphs,
    .topics,
    .leaderboard {
      flex-direction: column;
    }
    
    .select{
      font-size: 10px;
    }
  
    .first-graphs {
  
      #my-chart-id{
        height: 30vh;
      }
  
    .summary {
      font-size: smaller;
      width: calc(
        30.33% - 1rem
      ); /* Each item takes up 1/3 of the row minus margin */
      flex: 1 0 calc(30.33% - 1rem); /* Ensure each item flexes but maintains its width */
      height: 7rem;
      padding: 1rem;
      border-radius: 20px;
      border: 1px solid rgba(239, 240, 246, 1);
      background-color: rgba(255, 255, 255, 1);
      margin: auto;
      box-sizing: content-box;
    }
  }
  
  
  
    .topics {
      .weakests,
      .strongests {
        padding: .5rem;
           
        .bar-info{
          width: 50%
        }
        .progress{
          height: 0.4rem;
        }
        img {
          width: 3rem;
        }
      }
    }
  }
  </style>
  