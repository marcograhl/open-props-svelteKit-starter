<section>
    <h2> Hover me: if Postcss-Nesting works I'm green</h2>
    <p class="gradient-text">If Open Props work I'm a cool gradient Text, does custom Media Queries work with nesting... coool</p>
   </section>
   
   <p class="inBetween">Can I Use >= now in Media Queries? </p>
   <style lang="pcss">
   
   h2{
       font-size: 3rem;

       &:hover{
           color: green;
       }

   }
   
   .gradient-text {
     font-size: var(--font-size-6);
     background: var(--gradient-1);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
   
     @media (--sm){
       font-size: var(--font-size-8);
       background: var(--gradient-9);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
     }
   }
   
   @media screen and (width >= 500px) and (width <= 1200px) {
     .inBetween {
       background: var(--gradient-11);
     }
   }
   </style>