
# c++ snippets
## Usage
keywords
**Enjoy!**
Keywords for easy working
```
        


start =>  #include <iostream>
          
          int main() {
              $0
              return 0;
          }


cout =>  std::cout << $0 << '\n';


cin =>  std::cin << $0;


ivector =>  #include <vector>
            $0


istring =>  #include <string>
            $0


int =>  int $1{$0};


float =>  float $1{$0};


string =>  std::string $1{$0};


static_cast =>  static_cast<$1>($0)


count_if =>  std::count_if($0)


begin =>  std::begin($0)


end =>  std::end($0)


nothrow =>  std::nothrow()


struct =>  struct $0{};


fn =>  $0 $1() {
           
       }


class =>  class $1
          {
              $0
          }


aclass =>  class $1
           {
           private:
           protected:
           public:
               $0
           }


v =>  void $0


if =>  if ($1) {
           $0
       };


ife =>  if ($1) {
            $2
        } else {
            $0
        };


ef =>  else if ($1) {
           $0
       };

```