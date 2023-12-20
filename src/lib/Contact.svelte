<script>
    //Team section
    import imgG from '$lib/images/Gani-Wiratama.png';
    import imgI from '$lib/images/Yanlymar-Inka.png';
    import imgT from '$lib/images/Herfira-Triana.png';
    import imgR from '$lib/images/Yudi-Rofik.png';

    let teamData = [[["Gani Wiratama","Principle",imgG],["Yanlymar Inka","Co-Principle",imgI]],
                [["Herfira Triana","Project Architect",imgT],["Yudhi Rofik","Project Architect",imgR]]] ;


    //Form section
    //Form variable
    let nameInput = '';
    let messageInput = '';
  
    // Function to handle form submission
    const handleSubmit = () => {
        // Check the value of userInput and decide the link direction
        if (nameInput !== '' && messageInput !== '') {
        let url = 'https://wa.me/6281292892163?text=Nama%20'+ encodeURI(nameInput) + '%20dengan%20room%20requirement%20' + encodeURI(messageInput);
        window.open(url, '_blank');
        } else if (nameInput !== '') {
        let url = 'https://wa.me/6281292892163?text=Nama%20'+ nameInput;
        window.open(url, '_blank');
        } else {
        // Default behavior or handle other conditions
        console.log('No matching condition');
        alert(`please fill correctly`);
        }
    };

</script>


<div class="lg:h-screen flex flex-col lg:grid lg:grid-cols-4 overflow-hidden" id="contact" >
    <div class="lg:row-span-5 bg-white border-b lg:border-b-0 lg:border-r border-black py-14 px-12 lg:h-screen overflow-y-auto">
        <h2 class="font-bold uppercase text-2xl">The Team</h2>
        <p class="font-serif">We have established ourselves since 2021. Our experience and professional network help our clients with success.</p>
        <div class="flex flex-row flex-wrap gap-3 mt-3">
            {#each teamData as teamRow}
                <div class="flex flex-row flex-wrap gap-3">
                    {#each teamRow as member}
                        <div class="flex flex-col">
                            <img class="aspect-square object-cover h-44 w-44 bg-neutral-200" src={member[2]} alt="{member[0]} as {member[1]} of metaform">
                            <p class="font-sans font-bold">{member[0]}</p>
                            <p class="font-serif">{member[1]}</p>
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="col-span-3 row-span-4 flex flex-col p-14 ">
        <h2 class="font-bold uppercase text-2xl">WANT TO BUILD YOUR SERENE BUILDING?</h2>
        <p class="max-w-[75ch]">We are delighted to hear your inquiry. Write us a letter to learn more about your design need and curiosity</p>
        <form on:submit|preventDefault={handleSubmit} class="grow flex flex-col max-w-[75ch] py-12 gap-1">
            <label for="nameField">Name</label>
            <input type="text" id="nameField" bind:value={nameInput} class="bg-[#cfcdbf] "/>
            <label for="messageField">Room requirement</label>
            <textarea id="messageField" bind:value={messageInput} class="bg-[#cfcdbf] grow basis-full min-h-[7rem] resize-none"/>
            <div class="flex flex-row flex-wrap justify-between">
                <p class="text-xs text-[#cfcdbf] font-light ">this message will be directly sent to Whatsapp</p>
                <div class="flex flex-row-reverse grow">
                    <button type="submit" class="  bg-black text-white my-2 px-3">contact us</button>
                </div>
            </div>
        </form>
    </div>
    <div class="col-span-3 px-14 bg-[#a7aa97] flex flex-col justify-center">
        <div class="grid sm:grid-cols-2 my-6 lg:my-0">
            <h2 class="font-bold uppercase md:text-base lg:text-lg xl:text-xl sm:col-span-2">Contact</h2>
            <div>
                <h3 class="md:text-sm lg:text-base xl:text-lg font-bold capitalize">Message & Whatsapp</h3>
                <a href="https://wa.me/6281292892163" class="font-serif md:text-sm lg:text-base xl:text-lg"> +62 812 9289 2163 </a>
            </div>
            <div>
                <h3 class="md:text-sm lg:text-base xl:text-lg font-bold capitalize">Instagram</h3>
                <a href="https://www.instagram.com/metaforms.ds/" target="_blank" rel="noopener noreferrer" class="font-serif md:text-sm lg:text-base xl:text-lg">@metaforms.ds</a>
            </div>
            <div>
                <h3 class="md:text-sm lg:text-base xl:text-lg font-bold capitalize">Email</h3>
                <a href="mailto:metaformsds@gmail.com" class="font-serif md:text-sm lg:text-base xl:text-lg">metaformsds@gmail.com</a>
            </div>
            <div>
                <h3 class="md:text-sm lg:text-base xl:text-lg font-bold capitalize">Office</h3>
                <p class="font-serif md:text-sm lg:text-base xl:text-lg">Ruko Circle West I1 Blok A16, Citra 6, Jakarta Barat</p>
            </div>
        </div>
    </div>
</div>