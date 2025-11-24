
export type Option = string | number;

export type FilterSelectProps = {
  label: string;
  options: Option[];                 
  value?: Option;                    
  defaultValue?: Option;             
  onChange?: (v: Option) => void;
  suffix?: string;                   
  paramName: string;
  className?: string;
  id?: string;
  preferUrl?: boolean;               
  syncOnMount?: boolean;             
};

