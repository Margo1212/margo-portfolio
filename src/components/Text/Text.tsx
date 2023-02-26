type InputProps = {
    size?: 'text-3xl' | 'text-6xl' | 'text-2xl' | 'text-xl';
    weigth: 'normal' | 'medium' | 'bold' | 'semibold';
    color: 'primary' | 'primary-300' | 'text-dark';
    children: string;
  };


  export const Text = ({ size = 'text-3xl', color, weigth, children }: InputProps) => {
    return <p className={`${size} text-${color} font-${weigth}`} >{children}</p>;
  };
