
#include <utility>
using namespace std;
class resource {
  int x = 0;
};
class foo {
public:
  foo()
    : p{ new resource{} } {
  }
  foo(const foo& other)
    : p{ new resource{*(other.p)} } {
  }
  foo(foo&& other)
    : p{ other.p } {
    other.p = nullptr;
  }
  foo& operator=(foo other) {
    swap(*this, other);
    return *this;
  }
  ~foo() {
    delete p;
  }
  friend void swap(foo& first, foo& second) {
    using std::swap;
    swap(first.p, second.p);
  }
private:
  resource* p;
};
