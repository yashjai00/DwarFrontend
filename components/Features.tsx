import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'De-centerilized warranty',
    description:
      'You just focus on buying the product with out a worry we have the Warranty covered fro you.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      "We don't take any hidden surplus hidden fees from the user",
    icon: ScaleIcon,
  },
  {
    name: 'Reedeam your warranty anytime anywhere',
    description:
      'You can reedeam your warranty any time you like any place you like ',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      "We know you can't active always but we got you covered with our mobile notification feature",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100 mt-12 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-[#00897b]">decentWarranty</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-800 sm:text-4xl">
            A better way to save your warranty
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Want your warranties to be secured we got you there
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#00564d] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-[#00897b]">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
