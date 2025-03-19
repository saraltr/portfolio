import Image, { StaticImageData } from "next/image";
import heroImage from '@/public/images/hero.png';
import Link from "next/link";


export default function Hero(){
    return (
        <section className=" flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col flex-1 ">
                <div className="@[480px]:p-4">
                    <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
     style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${heroImage.src})` }}>
    {/* Other content here */}
                        <div className="px-40flex flex-col gap-2 text-left">
                            <h1
                                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                Featured Project
                            </h1>
                            <h2
                                className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                *
                            </h2>
                        </div>
                        <div className="flex-wrap gap-3 flex">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#14b858] text-[#112218] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                <span className="truncate">View work</span>
                            </button>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#244733] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                <span className="truncate">Contact me</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 py-10 px-10">
                    {/* <div className="flex justify-between items-center bg-[#426A5A] p-2 rounded-xl">
                        <h1 className="text-white bg-[#222831] p-4 rounded-2xl tracking-light text-[32px] font-bold leading-tight @[500px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] my-auto -ml-5">
                            What I do
                        </h1>
                        <ul className="flex flex-wrap justify-center mx-auto w-fit">
                            <li className="mx-1 my-1 bg-[#EF6F6C] p-2 rounded-2xl">Front end</li>
                            <li className="mx-2 my-1 bg-[#d68c45] p-2 rounded-2xl">Backend</li>
                            <li className="mx-2 my-1 bg-[#513b56] p-2 rounded-2xl">TypeScript</li>
                            <li className="mx-2 my-1 bg-[#122936] p-2 rounded-2xl">React</li>
                            <li className="mx-2 my-1 bg-[#EF6F6C] p-2 rounded-2xl">SQL</li>
                            <li className="mx-2 my-1 bg-[#d68c45] p-2 rounded-2xl">Node.js</li>
                            <li className="mx-2 my-1 bg-[#513b56] p-2 rounded-2xl">PHP</li>
                            <li className="mx-2 my-1 bg-[#122936] p-2 rounded-2xl">Rest APis</li>
                            <li className="mx-2 my-1 bg-[#EF6F6C] p-2 rounded-2xl">GraphQL</li>
                            <li className="mx-2 my-1 bg-[#d68c45] p-2 rounded-2xl">Relational DB</li>
                            <li className="mx-2 my-1 bg-[#513b56] p-2 rounded-2xl">Non Relational DB</li>
                            <li className="mx-2 my-1 bg-[#122936] p-2 rounded-2xl">UI/UX</li>
                        </ul>
                    </div> */}
                    
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#346548] p-4 flex-col">
                            <div className="text-white" data-icon="GridFour" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                                    fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Projects</h2>
                                <p className="text-[#93c8a9] text-sm font-normal leading-normal">Explore my latest projects</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#346548] p-4 flex-col">
                            <div className="text-white" data-icon="PaintBucket" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                                    fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M233,161.75a8,8,0,0,0-10,0c-.94.76-23,18.68-23,42.25a28,28,0,0,0,56,0C256,180.43,233.94,162.51,233,161.75ZM228,216a12,12,0,0,1-12-12c0-10.18,7-19.53,12-24.93,5,5.42,12,14.8,12,24.93A12,12,0,0,1,228,216Zm1.66-98.17L122.17,10.34a8,8,0,0,0-11.31,0L70.25,51,45.65,26.34A8,8,0,0,0,34.34,37.66l24.6,24.6L15,106.17a24,24,0,0,0,0,33.94L99.89,225a24,24,0,0,0,33.94,0l95.83-95.83A8,8,0,0,0,229.66,117.83ZM122.51,213.66a8,8,0,0,1-11.31,0L26.34,128.8a8,8,0,0,1,0-11.31L70.25,73.57l29.12,29.12a28,28,0,1,0,11.31-11.32L81.57,62.26l35-34.95,96.17,96.17ZM124,104a12,12,0,1,1-8.49,3.5A12,12,0,0,1,124,104Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Web Desing</h2>
                                <p className="text-[#93c8a9] text-sm font-normal leading-normal">Explore my latest projects</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 rounded-lg border border-[#346548] p-4 flex-col">
                            <div className="text-white" data-icon="Cards" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200ZM232,56V176a8,8,0,0,1-16,0V56H64a8,8,0,0,1,0-16H216A16,16,0,0,1,232,56Z"
                                ></path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-base font-bold leading-tight">Graphic Desing</h2>
                                <p className="text-[#93c8a9] text-sm font-normal leading-normal">Illustrations and art projects</p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
}