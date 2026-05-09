# Fragments of Growing Up
An interactive storytelling experience based on "Ribs" by Lorde.

## Part 1: Project Overview

### Project Description
*Fragments of Growing Up* transforms the song "Ribs" by Lorde into an interactive story experience. Users explore objects within a digital teenage bedroom that represent fragments of memory, capturing the nostalgia and the sudden weight of growing up. It reflects the perspective of a teenager at the moment everything begins to change.

### Live Links
- **[Live Website](https://primhosakul.github.io/Comm-Lab/final/)**

- **[Source Code](https://github.com/primhosakul/Comm-Lab/tree/main/final)**
---

## Part 2: Process & Reflection

### 1) Process: Design and Composition
**Source and Scope**

My project is an interactive adaptation of the song **"Ribs" by Lorde**. I chose to reinterpret the song’s themes of nostalgia and the average coming of age story. Rather than a linear narrative, I fragmented the lyrics and atmosphere into an "interactive-story experience" centered around a teenage bedroom—a sanctuary where "everything begins to change."

**Browser Affordances & Narrative Shaping**

I utilised the spatial layout of a digital room to act as the interface. By using the browser’s ability to **reveal and hide** content through interaction, I mirrored the process of uncovering old memories. Exploring objects in the room mimics the way we sift through childhood items to find meaning. This non-linear exploration allows the user to set the pace, emphasising the song's feeling of being "hit" by the realisation of growing older at different moments.

**Theoretical Application**
* **Gestalt Principles:** I used the principle of **Continuity** to guide the user through the room, using the visual weight of objects (like the record player and bed) to suggest interactivity. But I also did add a hover effect to scale the image when hover as well to help visually tie in the hit of it being interactive.
* **Medium-Awareness:** Following McLuhan’s idea that "the medium is the message," I designed the "What’s in My Bag" page to challenge the traditional utility of a website. While it functions like a mini-game, the visual language mimics an editorial layout rather than a standard web interface. By using high-fashion or magazine-style aesthetics to house interactive "fragments," I turned a passive listening experience (the song) into an active, tactile investigation that feels curated and personal.
* **Rhythm:** The rhythm is established through the continuous background audio. I incorporated the song into the mood as the music becomes an environmental heartbeat. The staccato "pause and reveal" of clicking objects plays against this steady background rhythm, reflecting the fragmented nature of memory.

### 2) Process: Technical 
**Architecture & Styling**
* **HTML Structure:** The project is organised using a main `.room` container that acts as a viewport for the scene. Each interactive element is a narrative unit layered over the background to create a sense of depth.
* **CSS Strategy:** I used absolute positioning and `aspect-ratio: 16 / 9` to ensure the room layout remained consistent. A key decision was using `overflow: hidden` on the container to maintain a clean "frame" for the experience, alongside `transform: translate(-50%, -50%)` to perfectly centre the room.

**Technical Deep Dive: The Interactive Cutouts & Letter Page**
* **Narrative Effect:** The interaction involves hovering over or clicking objects (like a letter) to trigger a story beat. This represents the character's internal monologue being "triggered" by physical reminders of their past.
* **Technical Challenge & Logic:** One significant challenge was the letter page layout. Initially, the letter would shift and move out of the viewport when hovered over. To fix this, I had to move the background from a CSS property to a standard HTML image tag to better manage its scaling. I then implemented a wrapper `div` with specific `min-height` and `max-height` constraints to stabilise the room.

```css
/* Logic for centering and maintaining room aspect ratio */
.room {
    min-height: 100vh;
    min-width: 100vw;
    aspect-ratio: 16 / 9;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

## 3) Reflection and Future Development
**Evolution of the Project**

The project evolved from a simple lyric display into a complex spatial environment. I faced a major technical hurdle with the video assets; originally, the files were too large to load reliably. By cutting down the video length and optimising the file size, I achieved a much smoother performance that didn't interrupt the user's immersion.

**Key Learnings**

I learned that web-based storytelling is heavily dependent on asset management. Even the best narrative can be ruined by a long loading screen. Finding the balance between high-quality visuals and technical performance was my biggest takeaway.

**Successes and Improvements**

* **Success:** I am very proud of the visual atmosphere I curated it definetly feels like a new workd and the "warm" but "lonely" aesthetic effectively captures the vibe of Lorde’s music.

* **Improvement:** I what to futher explore what interactions I could do for the website, the small details or even the big one.

**Feedback & Future Growth**

Feedback from peers helped me realise that the first page was not interesting, which was my aim however it felt that the theme didn't match at all. In the future, I would love to expand the project by adding spatial audio, where the volume of the background track changes depending on which part of the room the user is exploring. This would also lead to user being to scroll around the room (the room is bigger than the webpage)

## 4) Credits & References
**Technical Resources**

**MDN Web Doc** – Troubleshooting CSS absolute positioning and transform properties.

**Adobe Illustrator** - Used to edit photo for the whole

**AudioMass** – Used to edit audio files for each html page

**Shutterstock** - for the video 

Conceptual Inspiration

**Lorde**, "Ribs": The primary lyrical and emotional inspiration.

**Bedroom Pop Aesthetic**: Inspired the visual clutter and color palette.

**"What's in My Bag" Editorials**: Inspired the specific layout and editorial aesthetic.