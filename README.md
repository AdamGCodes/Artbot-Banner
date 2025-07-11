# Artbot Creative Banner

A dynamic product carousel banner built for Artbot Creative's test task.

## Project Brief

### Artbot Creative Banner Task
**Format:** 300x600

### Description
The banner will feature a product carousel accompanied by relevant titles. Please refer to the example screenshot for the desired appearance, as this is a test task we are not looking for pixel perfect solutions hence why we haven't sent any figma designs. All necessary fonts and imagery assets are located in the assets folder.

Upon completion, push the work to your GitHub versioning control workspace and share with the project team.

### Animation
The creative will start with the first product and title. After 1.5 seconds, the subsequent product and title will fade in. This pattern continues for all 4 products before looping. The animation should be executed using GSAP.

### Functionality
- The carousel should auto-play upon loading
- If the user interacts with the arrows, they will control the image transitions (images will fade in and out)
- Interaction with the arrows should also update the product title accordingly
- Follow the animation mock-up reference attached

### Product Titles
1. Mini Alexa in Amethyst
2. Medium Lily in Sapphire
3. Micro Bags
4. Small Check Merino Wool Scarf

## Features

- ✅ **Auto-playing carousel** with 1.5-second intervals
- ✅ **Smooth GSAP animations** with fade in/out transitions
- ✅ **Interactive arrow controls** for manual navigation
- ✅ **Responsive design** optimized for 300x600 banner format
- ✅ **Accessible alt text** for all product images
- ✅ **Custom BemboStd font** integration
- ✅ **Auto-resume functionality** after user interaction
- ✅ **Professional product showcase** with detailed descriptions

## Technical Requirements

- **Dimensions:** 300x600 pixels
- **Animation Library:** GSAP 3.12.5
- **Auto-play:** 1.5 second intervals
- **Transitions:** Fade in/out effects with slide animations
- **User Controls:** Arrow navigation with pause/resume
- **Looping:** Continuous carousel rotation
- **Font:** BemboStd (included in assets)

## Installation & Usage

### Quick Start
1. Clone or download this repository
2. Open `index.html` in a web browser
3. The banner will automatically start playing

### Local Development
```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd Artbot-Banner

# Open in your preferred code editor
code .  # or your preferred editor
```

### File Structure
```
Artbot-Banner/
├── README.md
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── assets/
    ├── BemboStd.woff2  # Custom font
    ├── arrow.png       # Navigation arrows
    ├── logo.png        # Mulberry logo
    ├── mini-alexa@2x.png
    ├── lily@2x.png
    ├── micro-bags@2x.png
    ├── mens-scarf-and-briefcase@2x.png
    └── design-screenshot.png
```

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## Development

This project uses:
- **HTML5** for semantic structure
- **CSS3** for styling, animations, and responsive design
- **JavaScript ES6+** for interactive functionality
- **GSAP** for smooth, professional animations
- **Web Fonts** for custom typography

### Key Technologies
- **GSAP (GreenSock Animation Platform)** - Professional animation library
- **CSS Flexbox** - Modern layout system
- **CSS Object-fit** - Image cropping and scaling
- **CSS Custom Properties** - Maintainable styling

## Customization

### Changing Auto-play Speed
Edit the `autoplayDelay` variable in `script.js`:
```javascript
const autoplayDelay = 1500; // 1.5 seconds
```

### Adding New Products
1. Add new image to `assets/` folder
2. Add new `<img>` element in `index.html`
3. Add corresponding heading in `index.html`
4. Update alt text for accessibility

### Modifying Animations
GSAP animations can be customized in the `showSlide()` function in `script.js`.

## Notes

### Image Cropping Strategy
The banner uses a fixed height cropping approach to ensure consistent presentation across all slides:

- **Fixed height:** 390px for all carousel images
- **Object-fit: cover:** Maintains aspect ratio while filling the container
- **Object-position: center top:** Aligns images to center-top, cropping from bottom
- **Benefits:** 
  - Consistent visual presentation regardless of original image dimensions
  - Removes unwanted elements (like watermarks or background artifacts)
  - Ensures professional, uniform appearance across all product slides
  - No need to manually edit original images

This approach allows for flexible image sourcing while maintaining design consistency.

### Image Content Considerations
While the cropping strategy ensures visual consistency, one image loses some potentially important content at the bottom. In a production environment, this would typically be addressed through:

- **Designer consultation** - Requesting adjusted image compositions
- **Asset provider communication** - Asking for alternative crop versions
- **In-house editing** - Using Photoshop or similar tools to adjust the image
- **Alternative cropping** - Adjusting the `object-position` for specific images

This demonstrates the importance of collaboration between development and design teams to ensure optimal asset delivery.

**Current Approach:** For this implementation, the cropping approach has been maintained for simplicity and development speed. The products remain the clear focal point, and while one item is slightly cropped, the essential product details are preserved and effectively showcased. This prioritizes consistent presentation while ensuring the core product value is communicated.

### Transition Timing
The autoplay timing has been set to exactly 1.5 seconds as specified in the brief (`autoplayDelay = 1500ms`). However, compared to the video example provided, this timing appears to be approximately 0.25-0.5 seconds faster than the reference material. While the current speed meets the technical requirements, it may feel slightly too fast for optimal user experience and could benefit from a slightly longer pause between transitions.

## Performance

- **Optimized images** with @2x resolution for high-DPI displays
- **Efficient animations** using GSAP's optimized rendering
- **Minimal DOM manipulation** for smooth performance
- **Lightweight implementation** suitable for banner ad environments

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is created for Artbot Creative's test task. All rights reserved.

## Contact

For questions or feedback, please contact the project team.
