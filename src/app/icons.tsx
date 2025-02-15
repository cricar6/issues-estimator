/* eslint-disable react/require-default-props */
import {
    TfiLayoutAccordionList,
    TfiDirectionAlt,
    TfiFlagAlt2,
    TfiArrowTopRight,
  } from 'react-icons/tfi';
  
  import { IconType } from 'react-icons';

  export interface IconProps {
    name: string; // Define a union type for the valid names
    size?: string; // Size in form of rem: 1.5rem
  }
  
  const iconMap: Record<string, IconType> = {
    'uncertainty': TfiDirectionAlt,
    'risk': TfiFlagAlt2,
    'complexity': TfiLayoutAccordionList,
    'arrow-right-top': TfiArrowTopRight,
  };
  
  // TODO: Handle external links
  function Icon({ name, size = '1.5rem' }: IconProps) {
    const IconComponent = iconMap[name];
  
    if (!IconComponent) {
      return <p>Icon not found {name}</p>;
    }
  
    return <IconComponent size={size} />;
  }
  
  export default Icon;