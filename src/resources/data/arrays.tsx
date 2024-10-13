import { ReactComponent as LongIcon } from '../icons/long.svg';
import { ReactComponent as LocalIcon } from '../icons/local.svg';
import { ReactComponent as SpecialIcon } from '../icons/piano.svg';
import { ReactComponent as StorageIcon } from '../icons/storage.svg';
import { ReactComponent as PackagingIcon } from '../icons/packaging.svg';
import { ReactComponent as CommerceIcon } from '../icons/commerce.svg';
import { ReactComponent as FlatRateIcon } from '../icons/flatrate.svg';
import { ReactComponent as TrackingIcon } from '../icons/tracking.svg';
import { ReactComponent as OnTimeIcon } from '../icons/ontime.svg';
import { ReactComponent as ShieldIcon } from '../icons/shield.svg';
import { ReactComponent as MoneyIcon } from '../icons/money.svg';
import { ReactComponent as CalendarIcon } from '../icons/calendar.svg';
import { ReactComponent as ProfessionalIcon } from '../icons/professional.svg';
import { ReactComponent as UrgentIcon } from '../icons/urgent.svg';
import { ReactComponent as MonitoringIcon } from '../icons/monitoring.svg';
import { ReactComponent as CleanIcon } from '../icons/clean.svg';
import { ReactComponent as InfinityIcon } from '../icons/infinity.svg';
import { ReactComponent as RouteIcon } from '../icons/route.svg';
import { ReactComponent as TimeIcon } from '../icons/time.svg';
import { ReactComponent as MonitorIcon } from '../icons/monitor.svg';
import { ReactComponent as ScheduleIcon } from '../icons/schedule.svg';
import { ReactComponent as ToolsIcon } from '../icons/toolbox.svg';
import { ReactComponent as DollyIcon } from '../icons/dolly.svg';
import { ReactComponent as EfficiencyIcon } from '../icons/efficiency.svg';
import { ReactComponent as IdeaIcon } from '../icons/idea.svg';
import { ReactComponent as DiamondIcon } from '../icons/diamond.svg';
import { ReactComponent as UnboxingIcon } from '../icons/unboxing.svg';

import long_distance1 from '../images/long-distance.jpg'
import long_distance2 from '../images/long-distance2.jpg'

import local2 from '../images/local22.jpg'
import local1 from '../images/local1.jpg'

import storage1 from '../images/storage1.jpg'
import storage2 from '../images/storage22.jpeg'

import commerce1 from '../images/commerce1.jpg'
import commerce2 from '../images/commerce2.jpg'

import special11 from '../images/piano222.png'
import special2 from '../images/piano12.png'

import packing1 from '../images/packing1.jpg'
import packing2 from '../images/packing22.jpg'

export const servicesList = [
    {
        id: 1,
        title: 'Long distance moving',
        icon: <LongIcon />,
        about: 'When moving to a new province or city, you want all your treasured belongings to arrive safely with you.\n \n 1. Consolidated Shipping:\n   • If you have flexible timing and a tight budget, Consolidated Shipping is a cost - effective choice.\n • Your items are securely labeled and tracked, sharing a truck with other clients.\n • You’ll need to be available during the delivery window.\n • This option offers all the benefits of shipping your possessions to your new location at a lower price.\n \n 2. Exclusive Express Long - Distance Moving:\n • If you’re on a tight schedule and want full control over delivery dates, our Exclusive Express Service is ideal.\n • We dedicate an entire truck exclusively for your shipment.\n • You can choose your preferred pick - up and drop - off dates with direct delivery.',
        link: '/services/toronto-long-distance-moving',
        subTitle: 'Move to any province of Canada with us',
        subTitle2: 'Cross - country moving options on time and within budget.',
        gallery: [
            {
                id: 1,
                photo: long_distance1
            },
            {
                id: 2,
                photo: long_distance2
            },
        ],
        benefits: [
            {
                id: 1,
                title: 'Flat Rate',
                subtitle: 'We offer flat rates for your moves across Canada',
                icon: <FlatRateIcon />
            },
            {
                id: 2,
                title: 'Online Tracking',
                subtitle: 'Full visibility of your shipment quaranteed. Simple as tracking the letter',
                icon: <TrackingIcon />
            },
            {
                id: 3,
                title: 'On-time Delivery',
                subtitle: 'Delivered exactly where and when you want',
                icon: <OnTimeIcon scale={10} />
            },
            {
                id: 4,
                title: 'Insurance',
                subtitle: 'Comprehensive insurance that covers full value of your items',
                icon: <ShieldIcon />
            },
        ]
    },
    {
        id: 2,
        title: 'Local moving',
        icon: <LocalIcon />,
        about: 'There are surprisingly a lot of details required in planning a successful relocation in Toronto & GTA area. Let us manage them for you.\n\n Providing hassle-free local moves in Toronto and the GTA is our core business.\n\n When moving in here, it’s important to have professionals who excel in thorough planning, clear communication, and efficient processes. With experts like these by your side, the entire experience becomes smoother.\n\nLet us be your ally in your new beginning!',
        link: '/services/toronto-local-moving',
        subTitle: 'Wherever you are moving, we are your local GTA moving experts',
        subTitle2: 'Trusted by Torontonians to move them quickly and safely',
        gallery: [
            {
                id: 1,
                photo: local1
            },
            {
                id: 2,
                photo: local2
            },
        ],
        benefits: [
            {
                id: 1,
                title: 'Transparent pricing',
                subtitle: 'Our estimates are proven to be 91% accurate',
                icon: <MoneyIcon />
            },
            {
                id: 2,
                title: '24 / 7 / 365 service',
                subtitle: 'Our team is ready to help regardless of day and time',
                icon: <CalendarIcon />
            },
            {
                id: 3,
                title: 'Professional service',
                subtitle: 'High-skilled team and premium moving supplies',
                icon: <ProfessionalIcon />
            },
            {
                id: 4,
                title: 'Last minute bookings',
                subtitle: 'We provide same or next day moves for customers who need to relocate with urgency',
                icon: <UrgentIcon />
            },
        ]
    },
    {
        id: 3,
        title: 'Storage',
        icon: <StorageIcon />,
        about: 'We offer affordable and reliable storage across Toronto & GTA. Close to your new home!\n\nDeclutter the space in you home with our on-demand storage service.\n\nWe handle everything for you.\n\nWe’ll pick up your items, store them securely in our partner’s facility, and bring them back whenever you need them. It’s that simple!\n\nNo heavy lifting — just more space and peace of mind.',
        link: '/services/toronto-storage-moving',
        subTitle: 'Create more space with our short- and long-term storage—the best solution in Toronto and the GTA',
        subTitle2: 'Storage for all your possessions',
        gallery: [
            {
                id: 1,
                photo: storage1
            },
            {
                id: 2,
                photo: storage2
            },
        ],
        benefits: [
            {
                id: 1,
                title: '24 / 7 Video Surveillance',
                subtitle: '24 / 7 Security through personnel and video monitoring',
                icon: <MonitoringIcon />
            },
            {
                id: 2,
                title: 'Dry & Clean Space',
                subtitle: 'Only dry and clean storage spaces for the most sensitive items',
                icon: <CleanIcon />
            },
            {
                id: 3,
                title: 'Long & Short Term Solutions',
                subtitle: 'No matter is it 1 day or 10 years',
                icon: <InfinityIcon />
            },
            {
                id: 4,
                title: 'Easy Access',
                subtitle: 'Minutes away of your current or future home',
                icon: <RouteIcon />
            },
        ]
    },
    {
        id: 4,
        title: 'Commercial relocation',
        icon: <CommerceIcon />,
        about: 'Whether you’re moving a small start-up from a co-working space or a large corporate office with dozens of desks, we’re here to help. We relocate your business quickly and safely, so you can get back to work without missing a beat. Trust us to handle your important business items with care. With us, your office move in Toronto is smooth and stress-free.\n\nWe have extensive experience in carefully packing and handling fragile and essential business technology. At First Class Movers, we use specialized packing materials and boxes to ensure these items are safely transported to your new office in perfect condition.',
        link: '/services/toronto-commercial-moving',
        subTitle: 'Reduce business downtime with the number one office mover in Toronto & GTA',
        subTitle2: 'We’re not just residential movers — We’re experts in office relocations',
        gallery: [
            {
                id: 1,
                photo: commerce1
            },
            {
                id: 2,
                photo: commerce2
            },
        ],
        benefits: [
            {
                id: 1,
                title: 'Minimal Downtime',
                subtitle: 'We plan and execute your move efficiently to reduce business downtime',
                icon: <TimeIcon />
            },
            {
                id: 2,
                title: 'Expert Handling of Equipment',
                subtitle: 'We carefully pack and transport your office furniture and electronics for safe, flawless delivery',
                icon: <MonitorIcon />
            },
            {
                id: 3,
                title: 'Flexible Scheduling',
                subtitle: 'We work around your business hours to minimize disruptions, offering evening or weekend moves',
                icon: <ScheduleIcon />
            },
            {
                id: 4,
                title: 'Post-Move Support',
                subtitle: 'We offer assistance with unpacking, furniture setup, and organizing your new office space',
                icon: <ToolsIcon />
            },
        ]
    },
    {
        id: 5,
        title: 'Special items moving',
        icon: <SpecialIcon />,
        about: 'It takes special training, professional expertise, and the right equipment to safely move pianos, pool tables, hot tubs, and other heavy, awkward items. Despite their size and weight, these pieces need to be protected both inside and out.\n\nYou want movers who are careful, caring, and knowledgeable. Our team treats your valuable possessions with the utmost respect, ensuring they arrive safely at your new location.\n\nFor a free quote, reach out to our Customer Service Team. We’ll offer competitive pricing based on your item type and delivery challenges, like stairways. Once we provide your quote, it’s locked in—no surprises on moving day, including reassembly time.',
        link: '/services/toronto-special-items-moving',
        subTitle: 'Trusted Movers for Heavy and Special Items',
        subTitle2: 'Moving Heavy Items with Care',
        gallery: [
            {
                id: 1,
                photo: special11
            },
            {
                id: 2,
                photo: special2
            },
        ],
        benefits: [
            {
                id: 1,
                title: 'Specialized Equipment',
                subtitle: 'We use proper tools to safely move large, heavy items like pianos, pool tables, and hot tubs without damage',
                icon: <DollyIcon />
            },
            {
                id: 2,
                title: 'Trained Professionals',
                subtitle: 'Our experienced movers handle delicate and oversized items with care, ensuring safe transport to your new location',
                icon: <ProfessionalIcon />
            },
            {
                id: 3,
                title: 'Efficient Moving Process',
                subtitle: 'We use expert planning and techniques to move bulky items quickly and safely, saving you time and effort',
                icon: <EfficiencyIcon />
            },
            {
                id: 4,
                title: 'Experience with Unique Challenges',
                subtitle: 'Our movers expertly navigate tight spaces to ensure a smooth move for your specialty items',
                icon: <IdeaIcon />
            },
        ]
    },
    {
        id: 6,
        title: 'Packing',
        icon: <PackagingIcon />,
        about: 'Our full packing service handles everything at your pick-up location, so you don’t have to worry. Whether you want us to pack all or just some of your belongings, we’ve got you covered. Your boxes and items will be securely delivered, allowing you to unpack at your own pace — or let us do it for you.\n\nWe know moving often happens during important life moments. With our team packing and clearly labeling everything, unpacking in your new home becomes an easy and enjoyable experience.',
        link: '/services/toronto-packing-service',
        subTitle: 'We can pack everything in your home or just some of it. Relax — our packing service handles it all for you',
        subTitle2: 'Let us lighten your load—our team will handle all the packing for you.',
        gallery: [
            {
                id: 1,
                photo: packing1
            },
            {
                id: 2,
                photo: packing2
            },
        ],
        benefits: [
            {
                id: 1,
                title: 'Save Time and Effort',
                subtitle: 'We handle all the packing so you don’t have to, allowing you to focus on other important aspects of your move',
                icon: <EfficiencyIcon />
            },
            {
                id: 2,
                title: 'Special Care for Fragile Items',
                subtitle: 'We use special materials and techniques to carefully protect delicate and valuable items',
                icon: <DiamondIcon />
            },
            {
                id: 3,
                title: 'High-Quality Packing Materials',
                subtitle: 'High-quality boxes, wrapping, and padding to protect your belongings and prevent damage during transport.',
                icon: <PackagingIcon />
            },
            {
                id: 4,
                title: 'Unpacking Services Available',
                subtitle: 'To make your move even easier, we also offer unpacking services, so you can settle in without the hassle',
                icon: <UnboxingIcon />
            },
        ]
    },
]

export const questionsList = [
    {
        id: 1,
        question: 'What is First Class Movers pricing model?',
        answer: 'We calculate your moving price based on the following factors;\n \n - Average volume of the item/inventory list provided by the client and the items that are being moved.\n - The distance between the locations.\n - Any special moving requirements.\n - Accessibility of the truck.\n - Date and time of the move',
        type: 0
    },
    {
        id: 2,
        question: 'How accurate is your moving estimate?',
        answer: 'We find our estimates to be exact and do not lead to any, even the smallest, price changes on a move day in over 91% moves. We also tolerate up to 10% discrepancy.',
        type: 0
    },
    {
        id: 3,
        question: 'When I will be charged for my move?',
        answer: 'To reserve a crew we require refundable deposit (online payment form), which goes towards the total of your moving cost. The remaining balance is due 2 hours before ending the move.',
        type: 0
    },
    {
        id: 4,
        question: 'What payment methods available to me?',
        answer: 'We accept credit/debit (Visa / MasterCard / American Express) card payments as well as cash as a method of payment.',
        type: 0
    },
    {
        id: 5,
        question: 'What is the best day of the week to move?',
        answer: 'If your doorman building doesn’t allow weekend moves, aim for Tuesday or Wednesday, since, according to our stats, fewer people move on these days.',
        type: 0
    },
    {
        "id": 63,
        "question": "How far in advance should I book my move?",
        "answer": "It’s best to book your move 2 to 4 weeks ahead, especially during busy times. This way, we can make sure everything is set and ready for your big day.",
        "type": 8
    },
    {
        "id": 64,
        "question": "What areas do you serve?",
        "answer": "We offer Residential and commercial moving services across Toronto & GTA. And long-distance moves across Canada.",
        "type": 8
    },
    {
        "id": 65,
        "question": "How do I get a quote for my move?",
        "answer": "Just give us a call or fill out the form on our website, and we’ll get back to you with a custom estimate based on what you need. Our estimates are proven to be 91% accurate.",
        "type": 8
    },
    {
        "id": 66,
        "question": "What is your cancellation policy?",
        "answer": "Just let us know if you need to cancel or reschedule. We usually need 3 days' notice, but we’ll go over the details when you book.",
        "type": 8
    },
    {
        "id": 67,
        "question": "What payment methods do you accept?",
        "answer": "We accept credit cards, debit cards, e-transfers, and cash. If you prefer another way to pay, let us know, and we’ll see what we can do.",
        "type": 8
    },
    {
        "id": 68,
        "question": "Do you provide moving supplies?",
        "answer": "Yes! We offer all the moving supplies you’ll need—boxes, bubble wrap, tape, and more.",
        "type": 8
    },
    {
        "id": 69,
        "question": "How do you protect my furniture during the move?",
        "answer": "We use padding, shrink wrap, and the right equipment to keep your furniture safe. We also take care of disassembling and reassembling large items if needed.",
        "type": 8
    },
    {
        "id": 70,
        "question": "What should I do to prepare for moving day?",
        "answer": "Organize and label your boxes, unplug appliances, and clear walkways. If you need more tips, our team can give you a heads-up on what to do!",
        "type": 8
    },
    {
        "id": 71,
        "question": "Do you offer same-day moving services?",
        "answer": "Yes, we can sometimes help with last-minute moves if our schedule allows it. Give us a call, and we’ll see if we can fit you in!",
        "type": 8
    },
    {
        "id": 72,
        "question": "What items cannot be moved?",
        "answer": "We can’t move hazardous items like chemicals, flammables, or perishable goods. If you’re unsure about something, just ask, and we’ll help!",
        "type": 8
    },
    {
        "id": 73,
        "question": "How long does a typical move take?",
        "answer": "It depends on the size of your home and how far you’re moving. Most local moves are done in a day, but longer distances might take more time.",
        "type": 8
    },
    {
        "id": 74,
        "question": "Do you offer moving services on weekends or holidays?",
        "answer": "Yes, we do! We offer weekend and holiday moving to fit your schedule. Just reach out to check availability.",
        "type": 8
    },
    {
        "id": 75,
        "question": "How much does a move typically cost?",
        "answer": "The price of your move depends on things like distance, the size of the move, and any extra services you choose, like packing or storage. Give us a call and we’ll give you a clear, no-surprises quote.",
        "type": 8
    },
    {
        "id": 76,
        "question": "What should I do if something goes wrong during the move?",
        "answer": "If anything goes off track, give us a call right away. Our team is here to fix it fast and make sure your move goes smoothly.",
        "type": 8
    },

    {
        "id": 77,
        "question": "How is the cost of my move calculated?",
        "answer": "We calculate the cost based on a few things—how far you’re moving, how much stuff you have, and any extra services you choose, like packing or storage. We make sure to give you a clear, upfront quote with no hidden fees!",
        "type": 7
    },
    {
        "id": 78,
        "question": "Are there any hidden fees?",
        "answer": "We pride ourselves on transparency, so everything will be included in your initial quote. If there are any potential extra charges, we’ll let you know upfront.",
        "type": 7
    },
    {
        "id": 79,
        "question": "How do I pay for my move?",
        "answer": "We make payments easy. You can pay by credit card, debit card, e-transfer, or cash. If you have a specific way you’d like to pay, just let us know!",
        "type": 7
    },
    {
        "id": 80,
        "question": "Do you require a deposit?",
        "answer": "Yes, we usually ask for a small deposit to secure your moving date. This will be explained when you book, and it goes toward the total cost of your move.",
        "type": 7
    },
    {
        "id": 81,
        "question": "When is the full payment due?",
        "answer": "Payment is typically due upon completion of the move. Once your belongings are safely delivered, we’ll settle the balance.",
        "type": 7
    },
    {
        "id": 82,
        "question": "Do you charge extra for stairs?",
        "answer": "We do charge a small fee if there are lots of stairs or tricky access points, but we’ll let you know about these costs ahead of time, so you’re not caught off guard.",
        "type": 7
    },
    {
        "id": 83,
        "question": "How much do packing services cost?",
        "answer": "The cost of packing services depends on how much you need us to pack. We offer both full and partial packing options, and we’ll include these costs in your quote so you can decide what works best for you.",
        "type": 7
    },
    {
        "id": 84,
        "question": "Are there additional fees for long-distance moves?",
        "answer": "Yes, long-distance moves typically have extra charges based on the distance and fuel costs. These fees will be factored into your quote, so you’ll know exactly what to expect.",
        "type": 7
    },
    {
        "id": 85,
        "question": "What happens if my move takes longer than expected?",
        "answer": "If the move takes longer than planned, we’ll let you know right away. Our pricing is based on time and services, so any changes will be discussed with you before moving forward.",
        "type": 7
    },
    {
        "id": 86,
        "question": "Do you offer discounts?",
        "answer": "We sometimes offer discounts for seniors, students, or military personnel. Be sure to ask when you book, and we’ll let you know if any specials apply to you.",
        "type": 7
    },
    {
        "id": 87,
        "question": "Can I get a custom moving package?",
        "answer": "Absolutely! We know every move is different, so we’re happy to customize a package that fits your specific needs and budget.",
        "type": 7
    },
    {
        "id": 88,
        "question": "Is insurance included in the cost?",
        "answer": "Basic insurance is typically included in your move, but if you have high-value items or want extra coverage, we offer additional insurance options for peace of mind.",
        "type": 7
    },
    {
        "id": 89,
        "question": "What if I need to change my move date? Will it cost extra?",
        "answer": "Changing your move date might involve a fee, especially if it’s last-minute, but we’ll always try to accommodate you. Just let us know as soon as possible, and we’ll work with you on any changes.",
        "type": 7
    },
    {
        "id": 90,
        "question": "How do you handle overtime charges?",
        "answer": "If your move takes longer than expected, overtime charges might apply, but we’ll keep you informed throughout the day. We’re all about clear communication, so you won’t be hit with surprise fees.",
        "type": 7
    },

    {
        "id": 91,
        "question": "Can I still get coverage if I pack some items myself?",
        "answer": "Yes, you can still get coverage, but remember that items you pack yourself may not be fully covered unless we inspect the packing. We recommend letting us handle the packing for more comprehensive coverage.",
        "type": 9
    },
    {
        "id": 92,
        "question": "Is there an additional cost for extra insurance?",
        "answer": "Yes, additional insurance comes with an extra fee, but it’s a great option if you have valuable or delicate items. We can provide a quote based on the level of coverage you need.",
        "type": 9
    },
    {
        "id": 93,
        "question": "What time will the movers arrive on moving day?",
        "answer": "We’ll confirm your exact arrival time a day or two before your move. Typically, we start in the morning, but we can work around your schedule.",
        "type": 9
    },
    {
        "id": 94,
        "question": "Do I need to be present during the move?",
        "answer": "It’s a good idea to be there, or have someone you trust on-site, to answer any questions and make sure everything is going as planned. If you can’t be there, just let us know!",
        "type": 9
    },
    {
        "id": 95,
        "question": "What should I do to prepare my home for moving day?",
        "answer": "Make sure everything is packed, walkways are clear, and large furniture is ready to go. If we’re packing for you, just relax and let us handle it!",
        "type": 9
    },
    {
        "id": 96,
        "question": "How long will the move take?",
        "answer": "It depends on the size of your home and how far you’re moving. Most local moves are completed in a day, while long-distance moves might take a bit longer.",
        "type": 9
    },
    {
        "id": 97,
        "question": "What if it rains or there’s bad weather on moving day?",
        "answer": "Don’t worry! We’re prepared to handle all types of weather. We use protective materials to keep your items safe, and we’ll work efficiently to avoid delays.",
        "type": 9
    },
    {
        "id": 98,
        "question": "Do I need to help the movers?",
        "answer": "No need to lift a finger! Our team will handle all the heavy lifting and transportation. Just sit back and relax, or focus on any last-minute details.",
        "type": 9
    },
    {
        "id": 99,
        "question": "Do I need to provide food or drinks for the movers?",
        "answer": "Not at all, but we appreciate the gesture! Our team is self-sufficient, but having some water available is always a kind touch.",
        "type": 9
    },
    {
        "id": 100,
        "question": "What should I do with my pets on moving day?",
        "answer": "It’s best to keep pets in a safe, quiet space or have someone watch them during the move to avoid stress or accidents.",
        "type": 9
    },

    {
        id: 7,
        question: 'What is your pricing model for long distance moves?',
        answer: 'We offer flat rate for long distance moves to any of Canadian provinces. It includes all services, materials and labour needed to complete your move, without any hidden fees. Contact our team to get a free consultation and tailor the services perfectly for you.',
        type: 1
    },
    {
        id: 10,
        question: 'Can I have someone meet the movers for delivery?',
        answer: 'You or someone you appoint (please give us their name and contact info beforehand) should be at the drop-off location to meet the foreman and go over the move details. We recommend that you or your representative stay with the team until the move is completed.',
        type: 1
    },
    {
        id: 11,
        question: 'How long does it generally take for my items to arrive?',
        answer: 'It majorly depends on distance between addresses.\n\nHowever if you need to deliver your belongins as fast as possible - we offer expedited shipping solutions which may take 1-3 days for delivery time.\n\nOn the other hand, if you would like to deliver on specific date - we can store your things in one of our warehousing facilities and deliver exactly when you need them.',
        type: 1
    },
    {
        id: 12,
        question: 'Can I track the status of my long-distance move?',
        answer: 'Yes, we offer online tracking and 24/7 support so you can see where the shipment is and set your plans accordingly.',
        type: 1
    },
    {
        id: 13,
        question: 'What are the items movers will not take?',
        answer: 'We will not move pets, firearms, drugs, chemicals and plants. And for moves into a storage & Long Distance moves, food is not allowed',
        type: 1
    },
    {
        id: 16,
        question: 'How far in advance should I schedule my long-distance move?',
        answer: 'It’s recommended to schedule your long-distance move at least 4 to 6 weeks in advance to ensure availability, especially during peak moving seasons.',
        type: 1
    },
    {
        id: 17,
        question: 'What happens if my delivery is delayed?',
        answer: 'If your delivery is delayed, we will keep you informed every step of the way and work to resolve any issues quickly. We also offer temporary storage options if needed.',
        type: 1
    },
    {
        id: 18,
        question: 'Can I change my delivery date after booking a long-distance move?',
        answer: 'Yes, you can request a change to your delivery date. However, please contact us as soon as possible to accommodate the changes, as availability may vary.',
        type: 1
    },
    {
        id: 19,
        question: 'Is there a weight limit for long-distance shipments?',
        answer: 'There is no strict weight limit, but costs may vary depending on the total weight of your items. We recommend reaching out for a detailed estimate based on your specific move.',
        type: 1
    },
    {
        id: 20,
        question: 'What is your policy if an item is damaged during a long-distance move?',
        answer: 'We take great care in handling your belongings, but if any items are damaged during the move, our insurance policies and claims process ensure that the situation is handled promptly and fairly.',
        type: 1
    },

    {
        id: 8,
        question: 'How far in advance should I book my local move?',
        answer: 'It’s best to book your local move 2 weeks in advance, especially during busy seasons. However, we may accommodate last-minute moves based on availability.',
        type: 2
    },
    {
        id: 14,
        question: 'What is included in your local moving service?',
        answer: 'Our local moving service includes loading, transporting, and unloading your belongings. We also offer additional services like packing, unpacking, disassembly, and reassembly of furniture if needed.',
        type: 2
    },
    {
        id: 15,
        question: 'How are local moving costs calculated?',
        answer: 'Local moving costs are typically calculated based on the number of hours needed for the move, the size of the crew, and the distance between your current and new home. Specialty item handling may also affect the price. Get the consultation from our expert team to tailor the service perfectly for you and receive accurate estimate',
        type: 2
    },
    {
        id: 21,
        question: 'Is there a minimum number of hours required for a local move?',
        answer: 'Yes it is usually required a minimum of 3 hours.',
        type: 2
    },
    {
        id: 22,
        question: 'Can I make changes to my move date or time after booking?',
        answer: 'Yes, you can request changes to your move date or time, but we recommend notifying us as early as possible to ensure availability. To book the local move with us - we require 50 CAD deposit which is going to be deducted from the final amount. The deposit is refundable if you notify us about cancellation or changing the date of your move 3 days before.',
        type: 2
    },
    {
        id: 23,
        question: 'Do you move heavy or specialty items like pianos or safes?',
        answer: 'Yes, we are equipped to handle heavy and specialty items like pianos, safes, and other bulky items. Let us know in advance so we can prepare the right tools and team for the job.',
        type: 2
    },
    {
        id: 24,
        question: 'What happens if something gets damaged during the move?',
        answer: 'We take great care with your belongings, but in the event something is damaged, our team will work with you to resolve the issue, and we offer coverage options to protect your items.',
        type: 2
    },
    {
        id: 25,
        question: 'Do you offer storage options for local moves?',
        answer: 'Yes, we offer short- and long-term storage solutions if you need to temporarily store items during your move.',
        type: 2
    },
    {
        id: 26,
        question: 'Can you disassemble and reassemble furniture?',
        answer: 'Yes, we can disassemble and reassemble furniture as part of our moving service. Just let us know what needs to be done, and we’ll take care of it.',
        type: 2
    },
    {
        id: 27,
        question: 'Do I have to stay with the movers while they work?',
        answer: 'It’s not necessary to stay with the movers for the entire process, but we do recommend that you or a representative be available at the start to provide instructions and at the end to ensure everything is in place as you wish.',
        type: 2
    },

    {
        "id": 28,
        "question": "What types of items can I store?",
        "answer": "You can store a wide range of items, including furniture, electronics, boxes of personal belongings, and seasonal items. However, hazardous materials, perishables, and flammable items are not allowed.",
        "type": 3
    },
    {
        "id": 29,
        "question": "How long can I store my items?",
        "answer": "You can store your items for as long as you need. We offer both short-term and long-term storage options, and our plans are flexible to fit your timeline.",
        "type": 3
    },
    {
        "id": 30,
        "question": "Are my items safe in storage?",
        "answer": "Yes, our storage facilities are equipped with 24/7 security monitoring, climate control, and protective measures to ensure your belongings remain safe and in good condition.",
        "type": 3
    },
    {
        "id": 31,
        "question": "Can I access my items while they’re in storage?",
        "answer": "Yes, you can access your items by scheduling a visit. Simply let us know in advance, and we’ll arrange a time for you to retrieve your belongings.",
        "type": 3
    },
    {
        "id": 32,
        "question": "Do you offer climate-controlled storage?",
        "answer": "Yes, we provide climate-controlled storage options for items that are sensitive to temperature and humidity, such as electronics, artwork, and wooden furniture.",
        "type": 3
    },
    {
        "id": 33,
        "question": "Can you pick up and deliver my items for storage?",
        "answer": "Yes, we offer pickup and delivery services for your convenience. Our team will collect your items, store them safely, and deliver them back when you’re ready.",
        "type": 3
    },
    {
        "id": 34,
        "question": "What happens if I need my items back sooner than expected?",
        "answer": "No problem! Just contact us, and we’ll arrange to have your items delivered to you as soon as possible.",
        "type": 3
    },
    {
        "id": 35,
        "question": "Are my items insured while in storage?",
        "answer": "Yes, we offer insurance options to cover your belongings while they are in storage, giving you extra peace of mind.",
        "type": 3
    },
    {
        "id": 36,
        "question": "Can I add more items to storage after my initial move?",
        "answer": "Yes, you can add more items to your storage unit at any time. Just let us know, and we’ll help coordinate the pickup and storage of your additional items.",
        "type": 3
    },
    {
        "id": 37,
        "question": "Can I store valuable items?",
        "answer": "Yes, you can store valuable items, and we take extra precautions to ensure they are protected. We recommend discussing any high-value items with our team so we can provide the best storage solution and insurance options.",
        "type": 3
    },
    {
        "id": 38,
        "question": "Will my items be stored in a shared or private space?",
        "answer": "Your items will be stored in a secure, private space. Each customer’s belongings are kept separate and well-organized to ensure safety and easy retrieval.",
        "type": 3
    },

    {
        "id": 39,
        "question": "What types of businesses do you handle for relocations?",
        "answer": "We handle relocations for all types of businesses, from small offices and retail shops to large corporate headquarters and warehouses.",
        "type": 4
    },
    {
        "id": 40,
        "question": "How do you minimize downtime during a commercial move?",
        "answer": "We work closely with you to plan and execute the move efficiently, often offering evening or weekend relocations to minimize disruptions and keep your business running smoothly.",
        "type": 4
    },
    {
        "id": 41,
        "question": "Do you handle the disassembly and reassembly of office furniture?",
        "answer": "Yes, we disassemble and reassemble office furniture as part of our commercial moving service, ensuring everything is properly set up in your new space.",
        "type": 4
    },
    {
        "id": 42,
        "question": "Can you move sensitive office equipment like computers and servers?",
        "answer": "Yes, we specialize in moving sensitive equipment such as computers, servers, and electronics. We use protective materials and secure handling procedures to ensure everything is moved safely.",
        "type": 4
    },
    {
        "id": 43,
        "question": "How do you handle large or bulky office equipment?",
        "answer": "We have the right tools and experience to safely move large office equipment, such as copiers, industrial printers, and heavy machinery. We ensure proper handling and transportation to prevent damage.",
        "type": 4
    },
    {
        "id": 44,
        "question": "Do you offer packing services for commercial moves?",
        "answer": "Yes, we offer full packing services for commercial moves, including packing sensitive documents, equipment, and office supplies. Our team ensures everything is labeled and organized for easy unpacking.",
        "type": 4
    },
    {
        "id": 45,
        "question": "Can you relocate our office after hours or on weekends?",
        "answer": "Absolutely! We offer flexible scheduling, including after-hours and weekend moves, to minimize disruption to your business operations.",
        "type": 4
    },
    {
        "id": 46,
        "question": "Can you help with the disposal of old office furniture or equipment?",
        "answer": "Yes, we offer disposal services for unwanted office furniture and equipment. We can assist in responsibly recycling or disposing of items you no longer need.",
        "type": 4
    },
    {
        "id": 47,
        "question": "Do you offer insurance for commercial relocations?",
        "answer": "Yes, we offer insurance options to cover your office furniture, equipment, and other assets during the move, ensuring full protection throughout the relocation process.",
        "type": 4
    },

    {
        "id": 48,
        "question": "What types of special or heavy items can you move?",
        "answer": "We specialize in moving large, awkward, and valuable items such as pianos, pool tables, hot tubs, safes, and large appliances.",
        "type": 5
    },
    {
        "id": 49,
        "question": "How do you ensure the safety of special items during the move?",
        "answer": "We use specialized equipment and protective padding to securely pack, lift, and transport your special items, ensuring they arrive safely without damage.",
        "type": 5
    },
    {
        "id": 50,
        "question": "Can you move large items through narrow doorways or up steep staircases?",
        "answer": "Yes, we are skilled at navigating tight spaces, narrow doorways, and steep staircases. We plan the best route and use the appropriate equipment to safely move your items.",
        "type": 5
    },
    {
        "id": 51,
        "question": "Do you provide disassembly and reassembly services for large items?",
        "answer": "Yes, for items that require disassembly, such as pool tables or large furniture, we offer disassembly and reassembly services as part of our moving package.",
        "type": 5
    },
    {
        "id": 52,
        "question": "Are special items insured during the move?",
        "answer": "Yes, we offer insurance options to fully protect your special items during the move, giving you peace of mind that your valuables are covered.",
        "type": 5
    },
    {
        "id": 53,
        "question": "Can you move special items long distance?",
        "answer": "Yes, we offer long-distance moving services for special items, ensuring they are securely transported to their new destination, whether it’s across the state or across the country.",
        "type": 5
    },
    {
        "id": 54,
        "question": "Do you offer storage for special items?",
        "answer": "Yes, we provide secure storage options for special items, including climate-controlled units for items that are sensitive to temperature or humidity.",
        "type": 5
    },
    {
        "id": 55,
        "question": "How do you handle moving antique or high-value items?",
        "answer": "We use custom packing materials and tailored handling techniques to ensure your antiques and high-value items are moved without risk of damage.",
        "type": 5
    },

    {
        "id": 56,
        "question": "What does your packing service include?",
        "answer": "Our packing service includes providing all the necessary materials, such as boxes, wrapping, and padding, and carefully packing your belongings to ensure they are protected during the move.",
        "type": 6
    },
    {
        "id": 57,
        "question": "Do you offer partial packing services?",
        "answer": "Yes, we offer both full and partial packing services. You can choose to have us pack your entire home or just specific rooms or items that require special care.",
        "type": 6
    },
    {
        "id": 58,
        "question": "How are fragile items packed?",
        "answer": "Fragile items are packed with extra care using specialized materials like bubble wrap, padding, and sturdy boxes. We ensure each item is securely packed to avoid damage during transport.",
        "type": 6
    },
    {
        "id": 59,
        "question": "Can you pack valuable or delicate items like artwork or antiques?",
        "answer": "Yes, we specialize in packing valuable or delicate items, such as artwork, antiques, and electronics. We use custom packing methods to ensure these items are securely protected.",
        "type": 6
    },
    {
        "id": 60,
        "question": "Do you offer unpacking services?",
        "answer": "Yes, we offer unpacking services to help you settle into your new home faster. Our team can unpack your boxes and help organize your belongings as needed.",
        "type": 6
    },
    {
        "id": 61,
        "question": "How do you label packed boxes?",
        "answer": "We clearly label each box with the room it belongs to and a brief description of the contents. This makes it easy for you to unpack and find what you need in your new home.",
        "type": 6
    },
    {
        "id": 62,
        "question": "Do I need to be present during packing?",
        "answer": "While it’s not required, we recommend being present during the packing process to provide instructions and ensure everything is packed to your satisfaction.",
        "type": 6
    }
]