# Contact page

<div class="kwes-form" width="100%">
  <form method="POST" action="mailto:biodasturchi@gmail.com" enctype="text/plain"
    style="
      display: flex;
      flex-direction: column;
      align-items: start;
      border: 1px solid var(--vp-c-brand-lighter); 
      border-radius:5px; 
      padding: 1rem; 
      margin-top: 1rem;">
    <div>
      <!-- <label for="name">Name</label> -->
      <input style="border: 1px solid var(--vp-c-brand-lighter); 
      border-radius:5px; margin: 0 0 5px 0; padding: 5px 15px;" placeholder="Enter your name" type="text" name="name" id="name" rules="required">
    </div>
    <div>
      <!-- <label for="email">E-mail</label> -->
      <input style="border: 1px solid var(--vp-c-brand-lighter); 
      border-radius:5px; margin: 0 0 5px 0; padding: 5px 15px;" placeholder="Enter your e-mail" type="email" name="email" id="email" rules="required|email|max:255">
    </div>
    <div>
      <textarea style="padding: 5px 15px;" placeholder="Enter text..." name="message" id="message" rules="required" rows="4" cols="50"></textarea>
    </div>
    <button style="border: 1px solid var(--vp-c-brand-lighter); 
      border-radius:5px; padding: 8px 16px" type="submit">Submit</button>
  </form>
</div>