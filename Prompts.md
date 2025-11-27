COMPONENT GENERATION -----------------------------------


Please create comprehensive design system documentation for this component. Structure the documentation using the following template:

## Component Overview
Provide a 2-3 sentence description of what this component is and its primary purpose in the design system.

## When to Use
- List 3-4 specific use cases
- Include guidance on appropriate contexts
- Mention what this component should NOT be used for

## Anatomy
[IMAGE PLACEHOLDER: Annotated diagram showing all parts of the component with numbered labels pointing to each element (e.g., 1. Container, 2. Label, 3. Icon, 4. Interactive element). Use a clean, high-contrast visual style with clear callout lines.]

Break down the component structure:
1. **Element name**: Description of this part and its function
2. **Element name**: Description of this part and its function
(Continue for all component parts)

## Variants
Document all available variants with:
- **Variant name**: Description and use case
- **Variant name**: Description and use case

[IMAGE PLACEHOLDER: Side-by-side comparison showing all variants of the component in their default state. Display 3-5 variants in a horizontal row with equal spacing and labels beneath each.]

## States
Document all interactive states:
- **Default**: Baseline appearance
- **Hover**: Appearance when cursor hovers
- **Active/Pressed**: Appearance when clicked/tapped
- **Focus**: Appearance when keyboard-focused
- **Disabled**: Appearance when non-interactive
- **Error**: Appearance when validation fails (if applicable)
- **Success**: Appearance when validation succeeds (if applicable)

[IMAGE PLACEHOLDER: Grid layout showing the component in each state. Arrange in 2-3 columns with state name labeled below each example. Use consistent component size across all states.]

## Behavior
### Interaction patterns
Describe how users interact with this component and what happens as a result.

### Responsive behavior
Explain how the component adapts across different screen sizes (mobile, tablet, desktop).

### Animation/Transitions
Detail any motion design, including timing, easing, and what triggers animations.

## Accessibility
### Keyboard navigation
- List all keyboard shortcuts and tab order behavior
- Describe focus management

### Screen reader support
- Document ARIA labels, roles, and properties
- Explain how screen readers should announce the component

### WCAG compliance
- Note relevant WCAG criteria (e.g., 2.1 AA)
- List specific requirements met (contrast ratios, touch target sizes, etc.)

## Design Specifications

### Spacing
[IMAGE PLACEHOLDER: Technical diagram showing all spacing measurements using redlines/dimension lines. Include padding, margins, and internal spacing between elements. Use pixels or rem units with clear numerical labels.]

- Internal padding: [values]
- External margins: [values]
- Element spacing: [values]

### Typography
- Font family: [reference to design system typography tokens]
- Font size: [values for different variants]
- Font weight: [values]
- Line height: [values]
- Letter spacing: [values]

### Colors
[IMAGE PLACEHOLDER: Color swatches showing all colors used in the component. Display as rectangles with hex/RGB values and token names beneath each swatch. Group by element (e.g., background colors, text colors, border colors).]

- Background: [color token reference]
- Text: [color token reference]
- Border: [color token reference]
- Interactive states: [color token references]

### Sizing
- Minimum dimensions: [values]
- Maximum dimensions: [values]
- Default size: [values]
- Size variants (if applicable): Small, Medium, Large [specific values]

### Borders & Shadows
- Border radius: [values]
- Border width: [values]
- Shadow/elevation: [reference to elevation tokens]

## Content Guidelines
### Writing style
- Provide guidance on tone and voice
- Include character limits if applicable
- Give examples of good and bad content

### Examples
**Do:**
- ✅ [Good example with explanation]
- ✅ [Good example with explanation]

**Don't:**
- ❌ [Bad example with explanation]
- ❌ [Bad example with explanation]

## Implementation Notes
### Technical considerations
- Note any performance considerations
- List browser/platform compatibility requirements
- Mention any dependencies

### Code reference
- Link to component in code repository
- Reference Storybook/pattern library URL
- Note version number

## Related Components
List 3-5 related components that are similar or often used together:
- **[Component name]**: Brief description of relationship
- **[Component name]**: Brief description of relationship

## Design Tokens Referenced
List all design system tokens used:
- Color tokens: [list]
- Spacing tokens: [list]
- Typography tokens: [list]
- Shadow/elevation tokens: [list]

## Changelog
| Version | Date | Changes |
|---------|------|---------|
| 1.0.0   | [Date] | Initial release |

## Additional Resources
- Figma file: [link]
- Storybook: [link]
- Code repository: [link]
- Related documentation: [links]


---------------------------------------------------