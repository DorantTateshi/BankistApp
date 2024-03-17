<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon
  }
]

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
  // More people...
]
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 class="text-4xl font-bold tracking-tight text-gray-900">
              We built our business on great customer service
            </h2>
            <p class="mt-4 text-gray-500">
              FINKI BANK's strategy focuses on leveraging digital technology to enhance customer
              experience and operational efficiency. By investing in digital banking solutions and
              customer-centric services, the bank aims to expand its market reach, drive growth, and
              build long-term relationships with its customers.
            </p>
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
            <img
              src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
              alt=""
              class="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-green-600">Deploy faster</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas
          a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <component
                :is="feature.icon"
                class="h-5 w-5 flex-none text-green-600"
                aria-hidden="true"
              />
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-green-600"
                  >Learn more <span aria-hidden="true">→</span></a
                >
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet our leadership
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae
          ullamcorper suspendisse.
        </p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="" />
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                {{ person.name }}
              </h3>
              <p class="text-sm font-semibold leading-6 text-green-600">{{ person.role }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p class="mt-4 leading-7 text-gray-600">
              Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
              <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt class="sr-only">Email</dt>
                  <dd>
                    <a class="font-semibold text-green-600" href="mailto:collaborate@example.com"
                      >collaborate@example.com</a
                    >
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd>+1 (555) 905-2345</dd>
                </div>
              </dl>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Press</h3>
              <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt class="sr-only">Email</dt>
                  <dd>
                    <a class="font-semibold text-green-600" href="mailto:press@example.com"
                      >press@example.com</a
                    >
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd>+1 (555) 905-3456</dd>
                </div>
              </dl>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
              <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt class="sr-only">Email</dt>
                  <dd>
                    <a class="font-semibold text-green-600" href="mailto:careers@example.com"
                      >careers@example.com</a
                    >
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd>+1 (555) 905-4567</dd>
                </div>
              </dl>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Say hello</h3>
              <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt class="sr-only">Email</dt>
                  <dd>
                    <a class="font-semibold text-green-600" href="mailto:hello@example.com"
                      >hello@example.com</a
                    >
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd>+1 (555) 905-5678</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
            <p class="mt-4 leading-7 text-gray-600">
              Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Los Angeles</h3>
              <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                <p>4556 Brendan Ferry</p>
                <p>Los Angeles, CA 90210</p>
              </address>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">New York</h3>
              <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                <p>886 Walter Street</p>
                <p>New York, NY 12345</p>
              </address>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Toronto</h3>
              <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                <p>7363 Cynthia Pass</p>
                <p>Toronto, ON N3Y 4H8</p>
              </address>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Chicago</h3>
              <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                <p>726 Mavis Island</p>
                <p>Chicago, IL 60601</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
