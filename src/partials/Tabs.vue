<template>
  <section class="relative border-t border-transparent dark:border-gray-800">
    <!-- Background gradient -->
    <div class="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none" aria-hidden="true"></div>
    <!-- End background gradient -->
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 class="h2 font-red-hat-display mb-4">Watch the pros do it</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">A workflow can be anything from designing a website, to writing an outline for a book.</p>
        </div>

        <!-- Section content -->
        <div>
          <div class="grid lg:grid-cols-3 gap-12 lg:gap-6">

            <!-- Category buttons -->
            <div class="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
              <button class="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0" :class="{ 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25': category === '1' }" @click="category = '1'">
                <svg class="w-4 h-4 flex-shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-current" :class="category === '1' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'" d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.586l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z" />
                </svg>
                <span :class="category === '1' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'">Web Development</span>
              </button>
              <button class="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0" :class="{ 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25': category === '2' }" @click="category = '2'">
                <svg class="w-4 h-4 flex-shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-current" :class="category === '2' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'" d="M15.4.6c-.84-.8-2.16-.8-3 0L8.7 4.3c.73.252 1.388.68 1.916 1.244.469.515.83 1.119 1.065 1.775L15.4 3.6c.8-.84.8-2.16 0-3zM4.937 6.9c-1.2 1.2-1.4 5.7-1.4 5.7s4.4-.4 5.6-1.5a2.987 2.987 0 000-4.2 2.9 2.9 0 00-4.2 0z" />
                </svg>
                <span :class="category === '2' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'">Design/Art</span>
              </button>
              <button class="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0" :class="{ 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25': category === '3' }" @click="category = '3'">
                <svg class="w-4 h-4 flex-shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-current" :class="category === '3' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'" d="M8 3l4 4H4zM8 13L4 9h8zM1 0h14v2H1zM1 14h14v2H1z" />
                </svg>
                <span :class="category === '3' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'">Video Editing</span>
              </button>
              <button class="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0" :class="{ 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25': category === '4' }" @click="category = '4'">
                <svg class="w-4 h-4 flex-shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-current" :class="category === '4' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'" d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z" />
                </svg>
                <span :class="category === '4' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'">Building</span>
              </button>
              <button class="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0" :class="{ 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25': category === '5' }" @click="category = '5'">
                <svg class="w-4 h-4 flex-shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-current" :class="category === '5' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'" d="M11 16v-5h5V0H5v5H0v11h11zM2 7h7v7H2V7z" />
                </svg>
                <span :class="category === '5' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'">Trading</span>
              </button>
            </div>

            <!-- Videos -->
            <div class="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
              <div class="grid md:grid-cols-2 gap-6">
                <div v-show="['1'].includes(category)">
                  <div class="relative">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/fabwoIpHxaY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                    </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Star Wars Design</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">18 min 57 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['1'].includes(category)">
                  <div class="relative flex justify-center items-center">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/eqgzC4MOFiE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Dashboard App</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">10 min 55 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['1'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/LN668OAUrK4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Plant App</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">30 min 29 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['1'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/LocPs6zdkrQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Portfolio Banner</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">4 min 18 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- TWO -->
                <div v-show="['2'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/nm30OKLgibQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Adobe Illustration</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">11 min 20 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['2'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/8KDPiUwnT-k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Among Us</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">6 min 20 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['2'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/abDAOV10bHI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Adobe Photoshop</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">19 min 52 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['2'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/dwNUzekdvW8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Octobe Special Photoshop</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">9 min 13 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Three -->
                <div v-show="['3'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/qi2JtMKXKgE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Blender 2.8 Video Editing</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">4 min 42 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['3'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/3-ZUKKwlAZs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Juggling Tour of Barcelona</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">2 min 18 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['3'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/aN72JUzZGjQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Adobe premier Pro CC</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">1 min 51 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div v-show="['3'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/dwNUzekdvW8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Octobe Special Photoshop</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">9 min 13 sec</div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <!-- Four -->
                <div v-show="['4'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/WYuRAB7GJ00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Lego Imperial Star Destroyer</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">30 min 4 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['4'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/EHqgiDSGr3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Minecraft Luckiest</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">18 min 12 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['4'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/Nlhc22eHTzQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Mud House Swimming Pool</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">12 min 13 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['4'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/4g0h0P7pvIM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">SIMS 4 River Cabin</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">19 min 20 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Five -->
                <div v-show="['5'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <!-- <img class="w-full" :src="require('@/images/video-thumb.jpg')" width="352" height="264" alt="Video thumbnail 01" /> -->
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/2u007Msq1qo?start=36" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">High-speed trading</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">2 min 50 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['5'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/SrQiOg0TV20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">Day Trading</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">13 min 30 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-show="['5'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/WyPPaiZEYO4?start=43" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">High Frequency Trading</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">3 min 25 sec</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div v-show="['5'].includes(category)">
                  <div class="relative flex justify-center items-center shadow">
                    <iframe width="352" height="264" src="https://www.youtube.com/embed/4g0h0P7pvIM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute inset-0 flex flex-col">
                      <div class="flex-grow flex justify-center items-center">
                        <a class="hover:opacity-75 transition duration-150 ease-in-out" href="#0">
                                                  </a>
                      </div>
                      <div class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
                        <a class="text-gray-900 dark:text-gray-400 font-medium" href="#0">SIMS 4 River Cabin</a>
                        <div class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">19 min 20 sec</div>
                      </div>
                    </div>
                  </div>
                </div> -->                
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tabs',
  data: function () {
    return {
      category: '1',
    }
  },
}
</script>