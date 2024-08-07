'use client';

import Link from 'next/link';


import { BsInfoSquare } from "react-icons/bs";
import { SiTorbrowser, SiOpenvpn } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { ThumbsDown, ThumbsUp } from 'lucide-react';


import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Bar, BarChart, LabelList, PolarAngleAxis, RadialBar, RadialBarChart, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import VersionBadge from "@/components/ui/versionBadge";
import { Separator } from "@/components/ui/separator"


export default function About() {
    return (
        <div className="w-screen flex-col gap-5 flex justify-center p-8 md:p-16 lg:p-32 xl:p-32">

            <h1 className='text-lg font-black'>About RepCheck</h1>
            <Separator className="mb-2 w-full border-2 border-[#1E1E1E]" />

            <div className="w-full flex gap-4 flex-col lg:flex-row">
                <Card className="w-full lg:w-[70%] h-fit">
                    <CardContent>
                        <div className=''>
                            <div className="flex flex-col w-full stretch border-">
                                <Accordion type="multiple">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>What is RepCheck?</AccordionTrigger>
                                        <AccordionContent className="AccordionContent">
                                            RepCheck is a GPT4 powered IP Reputation Checker extracting information from multiple sources and using AI to determine a risk level.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Does it use Vercel AI SDK?</AccordionTrigger>
                                        <AccordionContent className="AccordionContent">
                                            Yes. It uses the assistant API from Vercel AI SDK to simplify the process of making requests allowing user to type human sentences instead of just an IP, it also uses completion to call models and provide information about some elements and calculate the risk score.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Is it finished?</AccordionTrigger>
                                        <AccordionContent className="AccordionContent">
                                            No. The idea is to expand RepCheck for URLs, Mails and files/hashes, that's why the assistant is perfect as it will automatically trigger functions based on the user input, also important to point that it requires more training to improve the accuracy so it's important to check the reports if having doubts about the results.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>How does it work?</AccordionTrigger>
                                        <AccordionContent className="AccordionContent">
                                            RepCheck has an specific OpenAI Assistant with access to Virustotal and Greynoise APIs (for now)
                                            <br />
                                            With the information of the reports it calls a model to analyze certain elements and determine a risk score and some brief description for tags or justifications
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full lg:w-[30%] h-fit">
                    <CardContent>
                        <div className=''>
                            <div className="flex flex-col w-full">
                                <Accordion type="multiple">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='flex text-start'>Languages, Libs and Frameworks</AccordionTrigger>
                                        <AccordionContent className="AccordionContent flex flex-col gap-3">
                                            <VersionBadge name='Typescript' version='5.1.3' />
                                            <VersionBadge name='NextJS' version='14.2.5' />
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Styles and UI Libraries</AccordionTrigger>
                                        <AccordionContent className="AccordionContent flex flex-col gap-3">
                                            <VersionBadge name='PostCSS' version='8.4.40' />
                                            <VersionBadge name='TailwindCss' version='3.4.7' />
                                            <VersionBadge name='TailwindCss-Animate' version='1.0.7' />
                                            <VersionBadge name='TailwindCss-Merge' version='2.4.0' />
                                            <VersionBadge name='React-Icons' version='5.2.1' />
                                            <VersionBadge name='shadcn-ui' version='0.8.0' />
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>AI Related</AccordionTrigger>
                                        <AccordionContent className="AccordionContent flex flex-col gap-3">
                                            <Badge className='bg-[#1E1E1E] text-[#FFFAFA] m-1 w-fit'>Vecel AI SDK</Badge>
                                            <Badge className='bg-[#1E1E1E] text-[#FFFAFA] m-1 w-fit'>OpenAI GPT 4 Assistant</Badge>
                                            <Badge className='bg-[#1E1E1E] text-[#FFFAFA] m-1 w-fit'>OpenAI GPT 4 Model</Badge>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Reputation Analysis Tools</AccordionTrigger>
                                        <AccordionContent className="AccordionContent flex flex-col gap-3">
                                            <Badge className='bg-[#1E1E1E] text-[#FFFAFA] m-1 w-fit'>Greynoise</Badge>
                                            <Badge className='bg-[#1E1E1E] text-[#FFFAFA] m-1 w-fit'>Virustotal</Badge>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <h1 className='text-lg font-black'>About the blocks</h1>
            <Separator className="mb-2 w-full border-2 border-[#1E1E1E]" />

            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex flex-col gap-2 lg:w-[20%]'>
                    <h1 className='text-md font-semibold'>Virustotal Vendors Reports</h1>
                    <h2 className='text-sm font-light'>Graph showing the ammount of different rates of Virustotal security vendors</h2>
                    <Card className="h-fit">
                        <CardTitle className="flex gap-4 px-4 pt-4 text-xl">Security vendors' reports</CardTitle>
                        <CardDescription className="flex gap-4 px-4 pt-2">

                        </CardDescription>
                        <CardContent className="flex gap-4 p-4">
                            <div className="grid items-center gap-2">
                                <div className="grid flex-1 auto-rows-min gap-0.5">
                                    <div className="text-sm text-black font-light">Harmless</div>
                                    <div className="flex items-baseline gap-1 text-sm tabular-nums leading-none text-[#4CB140] font-black">
                                        Nº of security vendors who flagged IP as harmless
                                    </div>
                                </div>
                                <div className="grid flex-1 auto-rows-min gap-0.5">
                                    <div className="text-sm text-black font-light">Suspicious</div>
                                    <div className="flex items-baseline gap-1 text-sm tabular-nums leading-none text-[#EF9234] font-black">
                                        Nº of security vendors who flagged IP as suspicious
                                    </div>
                                </div>
                                <div className="grid flex-1 auto-rows-min gap-0.5">
                                    <div className="text-sm text-black font-light">Malicious</div>
                                    <div className="flex items-baseline gap-1 text-sm tabular-nums leading-none text-[#C9190B] font-black">
                                        Nº of security vendors who flagged IP as malicious
                                    </div>
                                </div>
                                <div className="grid flex-1 auto-rows-min gap-0.5">
                                    <div className="text-sm text-black font-light">Undetected</div>
                                    <div className="flex items-baseline gap-1 text-sm tabular-nums leading-none text-[#06C] font-black">
                                        Nº of security vendors who never flagged IP
                                    </div>
                                </div>
                            </div>
                            <ChartContainer
                                config={{
                                    malicious: {
                                        label: "Malicious",
                                        color: "#C9190B",
                                    },
                                    suspicious: {
                                        label: "Suspicious",
                                        color: "#EF9234",
                                    },
                                    harmless: {
                                        label: "Harmless",
                                        color: "#4CB140",
                                    },
                                    undetected: {
                                        label: "Undetected",
                                        color: "#06C",
                                    },
                                }}
                                className="mx-auto aspect-square w-full max-w-[80%]"
                            >
                                <RadialBarChart
                                    margin={{
                                        left: -10,
                                        right: -10,
                                        top: -10,
                                        bottom: -10,
                                    }}
                                    data={[
                                        {
                                            activity: "harmless",
                                            value: 11,
                                            fill: "var(--color-harmless)",
                                        },
                                        {
                                            activity: "suspicious",
                                            value: 14,
                                            fill: "var(--color-suspicious)",
                                        },
                                        {
                                            activity: "malicious",
                                            value: 31,
                                            fill: "var(--color-malicious)",
                                        },
                                        {
                                            activity: "undetected",
                                            value: 27,
                                            fill: "var(--color-undetected)",
                                        },
                                    ]}
                                    innerRadius="20%"
                                    barSize={24}
                                    startAngle={90}
                                    endAngle={450}
                                >
                                    <PolarAngleAxis
                                        type="number"
                                        domain={[0, 100]}
                                        dataKey="value"
                                        tick={false}
                                    />
                                    <RadialBar dataKey="value" background cornerRadius={15} />
                                </RadialBarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>

                <div className='lg:w-[18%] flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-md font-semibold'>Greynoise Tags</h1>
                        <h2 className='text-sm font-light'>Diferent tags related to the IP, according to Greynoise, and an AI description of what they mean</h2>
                        <Card className="w-full h-fit">
                            <CardHeader>
                                <CardTitle className='text-xl'>Tags</CardTitle>
                                <CardDescription>
                                    Hover <Badge className='bg-[#1E1E1E] text-[#FFFAFA] m-1 text-xs'>tags</Badge> to see more details
                                </CardDescription>
                            </CardHeader>
                            <CardContent className=" grid-flow-row gap-1">
                                <HoverCard>
                                    <HoverCardTrigger className='hover:cursor-pointer'><Badge className='bg-[#1E1E1E] text-[#FFFAFA] m-1'>Tag Name</Badge></HoverCardTrigger>
                                    <HoverCardContent className='bg-[#FFFAFA] hcc' sideOffset={15}>
                                        <p>Ai Generated description for tag</p>
                                    </HoverCardContent>
                                </HoverCard>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-md font-semibold'>Complete Reports</h1>
                        <h2 className='text-sm font-light'>Link to the full reports on both virustotal and greynoise</h2>
                        <Card className="w-full h-fit">
                            <CardHeader>
                                <CardTitle className='text-xl'>Want to know more?</CardTitle>
                                <CardDescription>
                                    Take a look at the full reports
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="grid auto-rows-min gap-2">
                                    <div className={`flex flex-col items-start gap-2 text-xl font-normal tabular-nums leading-none`}>
                                        <Link href={"#"} className='border-[#06C] border-b-2 hover:font-bold transition-all duration-500'>Check Virustotal Report</Link>
                                        <Link href={"#"} className='border-[#06C] border-b-2 hover:font-bold transition-all duration-500'>Check Greynoise Report</Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className='lg:w-[20%] flex flex-col gap-4'>
                <div className='flex flex-col gap-2 '>
                    <h1 className='text-md font-semibold'>Malicious/Risk Score</h1>
                    <h2 className='text-sm font-light'>Calculated Score using GPT4 and the obtained reports</h2>
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle className='text-xl'>Malicious Score</CardTitle>
                            <CardDescription>
                                Hover info to see justification
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid auto-rows-min gap-2">
                                <div className={`flex flex-col items-center gap-1 text-2xl font-bold tabular-nums leading-none`}>
                                    <div className="flex w-full gap-1 text-2xl font-bold tabular-nums leading-none items-center">
                                        <ChartContainer
                                            config={{
                                                indicator: {
                                                    label: "indicator",
                                                    color: `#4CB140`,
                                                },
                                            }}
                                            className="aspect-auto h-[32px] w-full"
                                        >
                                            <BarChart
                                                accessibilityLayer
                                                layout="vertical"
                                                margin={{
                                                    left: 0,
                                                    top: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                }}
                                                data={[
                                                    {
                                                        date: 0,
                                                        indicator: 1,
                                                    },
                                                ]}
                                            >
                                                <Bar
                                                    dataKey="indicator"
                                                    fill="var(--color-indicator)"
                                                    radius={4}
                                                    barSize={32}
                                                >
                                                    <LabelList
                                                        position="insideLeft"
                                                        dataKey="date"
                                                        offset={8}
                                                        fontSize={12}
                                                        fill="white"
                                                    />
                                                </Bar>
                                                <YAxis dataKey="date" type="category" tickCount={1} hide />
                                                <XAxis dataKey="indicator" type="number" hide />
                                            </BarChart>
                                        </ChartContainer>
                                        <HoverCard>
                                            <HoverCardTrigger className='hover:cursor-pointer'><BsInfoSquare className='text-black text-2xl' /></HoverCardTrigger>
                                            <HoverCardContent className='bg-white hcc w-[90%]' sideOffset={15}>
                                                <p className='text-wrap text-lg text-[#4CB140]'>AI Generated justification for a benign score, 0</p>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </div>
                                    <div className="flex w-full gap-1 text-2xl font-bold tabular-nums leading-none items-center">
                                        <ChartContainer
                                            config={{
                                                indicator: {
                                                    label: "indicator",
                                                    color: `#EF9234`,
                                                },
                                            }}
                                            className="aspect-auto h-[32px] w-full"
                                        >
                                            <BarChart
                                                accessibilityLayer
                                                layout="vertical"
                                                margin={{
                                                    left: 0,
                                                    top: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                }}
                                                data={[
                                                    {
                                                        date: 0.7,
                                                        indicator: 0.7,
                                                    },
                                                ]}
                                            >
                                                <Bar
                                                    dataKey="indicator"
                                                    fill="var(--color-indicator)"
                                                    radius={4}
                                                    barSize={32}
                                                >
                                                    <LabelList
                                                        position="insideLeft"
                                                        dataKey="date"
                                                        offset={8}
                                                        fontSize={12}
                                                        fill="white"
                                                    />
                                                </Bar>
                                                <YAxis dataKey="date" type="category" tickCount={1} hide />
                                                <XAxis dataKey="indicator" type="number" hide />
                                            </BarChart>
                                        </ChartContainer>
                                        <HoverCard>
                                            <HoverCardTrigger className='hover:cursor-pointer'><BsInfoSquare className='text-black text-2xl' /></HoverCardTrigger>
                                            <HoverCardContent className='bg-white hcc w-[90%]' sideOffset={15}>
                                                <p className='text-wrap text-lg text-[#EF9234]'>AI Generated justification for a suspicious score, from 0.1 to 0.9</p>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </div>
                                    <div className="flex w-full gap-1 text-2xl font-bold tabular-nums leading-none items-center">
                                        <ChartContainer
                                            config={{
                                                indicator: {
                                                    label: "indicator",
                                                    color: `#C9190B`,
                                                },
                                            }}
                                            className="aspect-auto h-[32px] w-full"
                                        >
                                            <BarChart
                                                accessibilityLayer
                                                layout="vertical"
                                                margin={{
                                                    left: 0,
                                                    top: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                }}
                                                data={[
                                                    {
                                                        date: 1,
                                                        indicator: 1,
                                                    },
                                                ]}
                                            >
                                                <Bar
                                                    dataKey="indicator"
                                                    fill="var(--color-indicator)"
                                                    radius={4}
                                                    barSize={32}
                                                >
                                                    <LabelList
                                                        position="insideLeft"
                                                        dataKey="date"
                                                        offset={8}
                                                        fontSize={12}
                                                        fill="white"
                                                    />
                                                </Bar>
                                                <YAxis dataKey="date" type="category" tickCount={1} hide />
                                                <XAxis dataKey="indicator" type="number" hide />
                                            </BarChart>
                                        </ChartContainer>
                                        <HoverCard>
                                            <HoverCardTrigger className='hover:cursor-pointer'><BsInfoSquare className='text-black text-2xl' /></HoverCardTrigger>
                                            <HoverCardContent className='bg-white hcc w-[90%]' sideOffset={15}>
                                                <p className='text-wrap text-lg text-[#C9190B]'>AI Generated justification for a malicious score, 1</p>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='flex flex-col gap-2 '>
                <h1 className='text-md font-semibold'>Community Score</h1>
                <h2 className='text-sm font-light'>Extracted from Virustotal community votes towards an specific IP</h2>
                <Card>
                      <CardHeader>
                        <CardTitle className='text-xl'>Community Score</CardTitle>
                        <CardDescription>
                          Virustotal Community Score
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <div className="grid auto-rows-min gap-2">
                          <div className={`flex flex-col items-start gap-2 text-xl font-normal tabular-nums leading-none`}>
                          <div className='flex items-center gap-2'><ThumbsUp className='text-[#4CB140]'/><span>Community Score: 523</span></div>
                          <div className='flex items-center gap-2'><ThumbsDown className='text-[#C9190B]'/><span>Community Score: -4 </span></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                </div>
                </div>
                
                <div className='flex flex-col gap-2 lg:w-[20%]'>
                    <h1 className='text-md font-semibold'>Virustotal Quick Scan</h1>
                    <h2 className='text-sm font-light'>Results of greynoise quick-scan</h2>
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle>Quick Analysis</CardTitle>
                            <CardDescription>
                                Results from the quick analysis of IP
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Noise</TableHead>
                                        <TableHead>RIOT</TableHead>
                                        <TableHead>Code</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell> Yes / No </TableCell>
                                        <TableCell> Yes / No </TableCell>
                                        <TableCell> Code </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <div className='flex flex-col gap-2 lg:w-[20%]'>
                    <h1 className='text-md font-semibold'>Bot, Tor or VPN</h1>
                    <h2 className='text-sm font-light'>Display if the IP have been found using or being under any of the tools</h2>
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle>TOR, BOT or VPN?</CardTitle>
                            <CardDescription>
                                Tor Node, VPN or BOT identification
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-1">
                            <div className="grid auto-rows-min gap-2">
                                <div className={`flex flex-col items-start gap-2 text-xl font-normal tabular-nums leading-none`}>
                                    <div className='text-wrap flex items-center text-sm gap-2'><SiTorbrowser className={`text-xl text-[#4CB140]`} /> IP recognized as a tor exit node</div>
                                    <div className='text-wrap flex items-center text-sm gap-2'><SiOpenvpn className={`text-xl text-[#4CB140]`} /> IP using a VPN</div>
                                    <div className='text-wrap flex items-center text-sm gap-2'><FaRobot className={`text-xl text-[#807c7c]`} /> IP not recognized as BOT</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
