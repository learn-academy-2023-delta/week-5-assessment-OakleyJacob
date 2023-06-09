# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


def filter_array array, letter
    array.select do |word|
        word.downcase.include?(letter.downcase)
    end
end

p filter_array beverages_array, filter_letter_o

p filter_array beverages_array, filter_letter_t



# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def filter_object object
    object.values.flatten.sort
end

p filter_object us_states


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
    def initialize(model = nil)
        @wheels = 2
        @current_speed = 0
        @model = model
    end

    def to_s
        "#{@model} bike has #{@wheels} and is going #{@current_speed} distance/time"
    end
    def bike_info
        "#{@model} bike has #{@wheels} and is going #{@current_speed} distance/time"
    end
    def pedal_faster int
        @current_speed += int
    end
    def brake int
        @current_speed = 0 if int>@current_speed
        @current_speed -= int
    end
end

my_bike = Bike.new "My model"
puts my_bike #I like this way better
p my_bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
p my_bike.pedal_faster(10) => 10
p my_bike.pedal_faster(18) => 28
p my_bike.brake(5) => 23
p my_bike.brake(25) => 0