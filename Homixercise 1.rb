class Animal
    def initialize (name)
        @name = name
    end
    def name
        @name
    end
    def talk
      raise NotImplementedError
    end
end

class Dog < Animal
    def talk
        puts "Woof"
    end
end

class Cat < Animal
    def talk
        puts "Meow"
    end
end
